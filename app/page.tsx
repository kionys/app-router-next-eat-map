// app/page.tsx
import { CurrentLocationButton } from "@components/elements/current-location-button";
import { IStore } from "@core/interfaces/store";
import { KakaoMap } from "components/templates/kakao-map";
import { KakaoMarkers } from "components/templates/kakao-markers";
import { StoreBox } from "components/templates/store-box";

export const dynamic = "force-dynamic"; // Next.js가 동적 렌더링을 사용하도록 강제

const Home = async () => {
  let stores: IStore[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/stores`,
      { cache: "no-store" },
    );

    if (!response.ok) throw new Error("Failed to fetch data");

    stores = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
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
