"use client";
import { Loading } from "@components/elements/loading";
import { Pagination } from "@components/elements/pagination";
import { StoreList } from "@components/templates/store-list";
import { ILike, ILikeApiResponse } from "@core/interfaces/store";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";

/**
 * 찜한 맛집 페이지
 * @author 김기원
 */
const LikesPage = () => {
  const searchParams = useSearchParams();
  const page = searchParams?.get("page") || "1";

  const fetchLikes = async () => {
    const { data } = await axios({
      method: "GET",
      url: `/api/likes?page=${page}&limit=10`,
    });
    return data as ILikeApiResponse;
  };

  const {
    data: likes,
    isError,
    isLoading,
    isSuccess,
  } = useQuery(`likes-${page}`, fetchLikes);

  return (
    <div className="px-4 md:max-w-4xl mx-auto py-8">
      <h3 className="text-lg font-semibold">찜한 맛집</h3>
      <div className="mt-1 text-gray-500 text-sm">찜한 가게 리스트입니다.</div>

      <ul role="list" className="divide-y divide-gray-100 mt-10">
        {!isLoading && !isError ? (
          likes?.data?.map((like: ILike, i: number) => {
            return <StoreList key={i} store={like.store} i={i} />;
          })
        ) : isLoading ? (
          <Loading />
        ) : isError ? (
          <div className="w-full h-screen mx-auto pt-[10%] text-red-500 text-center font-semibold">
            다시 시도해주세요
          </div>
        ) : null}

        {/* 데이터는 성공적으로 전달받았지만 값이 없는 경우 */}
        {isSuccess && !!!likes.data.length && (
          <div className="p-4 border border-gray-200 rounded-md text-sm text-gray-400">
            찜한 가게가 없습니다.
          </div>
        )}
      </ul>

      <Pagination
        pathname="/users/likes"
        total={likes?.totalPage}
        page={page}
      />
    </div>
  );
};
export default LikesPage;
