// app/page.tsx
import { CurrentLocationButton } from "@components/elements/current-location-button";
import { IStore } from "@core/interfaces/store";
import { KakaoMap } from "components/templates/kakao-map";
import { KakaoMarkers } from "components/templates/kakao-markers";
import { StoreBox } from "components/templates/store-box";

export const dynamic = "force-dynamic"; // Next.js가 동적 렌더링을 사용하도록 강제

const Home = async () => {
  const stores: IStore[] = await getData();

  return (
    <>
      <KakaoMap />
      <KakaoMarkers stores={stores} />
      <StoreBox />
      <CurrentLocationButton />
    </>
  );
};
export default Home;

const getData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (e) {
    console.log(e);
  }
};
