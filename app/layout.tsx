import "@components/styles/globals.css";
import { Metadata } from "next";
import { Suspense } from "react";
import { NextLayout, NextProvider } from "./providers";

export const metadata: Metadata = {
  title: "EatMap",
  description: "Next.js 14(App Router)를 이용한 맛집 앱",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <NextProvider>
          <NextLayout>
            <Suspense fallback={<></>}>{children}</Suspense>
          </NextLayout>
        </NextProvider>
      </body>
    </html>
  );
};
export default RootLayout;
