import { IStore, IStoreApiResponse } from "@core/interfaces/store";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IStoreApiResponse | IStore[] | IStore>,
) {
  const { page = "", id }: { page?: string; id?: string } = req.query;
  const prisma = new PrismaClient();

  if (page) {
    const skipPage = parseInt(page) - 1;
    const count = await prisma.store.count();
    const stores = await prisma.store.findMany({
      orderBy: { id: "asc" },
      take: 10,
      skip: skipPage * 10,
    });

    res.status(200).json({
      page: parseInt(page),
      data: stores,
      totalCount: count,
      totalPage: Math.ceil(count / 10),
    });
  } else {
    const { id }: { id?: string } = req.query;
    const stores = await prisma.store.findMany({
      orderBy: { id: "asc" },
      where: {
        id: id ? parseInt(id) : {},
      },
    });
    return res.status(200).json(id ? stores[0] : stores);
  }
}
