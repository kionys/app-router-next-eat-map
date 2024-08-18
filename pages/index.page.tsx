import { KakaoMap } from "@components/templates/kakao-map";

export default function Home() {
  return (
    <>
      <KakaoMap />
    </>
  );
}
/**
 * Next.js Data Fetching
 *------------------------------
 * CSR (Client Side Rendering)  : 초기 로딩이 빠르지만 SEO가 어려우며, 클라이언트에서 데이터 로딩이 필요
 * Ex) SPA, 대시보드 및 관리 패널, 소셜 미디어 플랫폼, 라이브 스트리밍 및 실시간 업데이트 서비스
 *
 * SSR (Server Side Rendering)  : 초기 로딩이 빠르고 SEO가 우수하지만, 서버 부하가 증가할 수 있음
 * Ex) 뉴스 웹 사이트, 블로그, 전자 상거래 플랫폼 등
 *
 * SSG (Static Stie Generation) : 초기 로딩이 빠르고 SEO가 우수하며 서버 부하가 낮지만, 동적데이터에 제한이 있음
 * Ex) 블로그, 포트폴리오 웹 사이트, 회사 폼페이지 등 정적인 사이트에 이용
 */
