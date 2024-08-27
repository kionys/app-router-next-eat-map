"use client";

import { NavBar } from "@components/templates/navbar";
// import "@components/styles/globals.css";
// import { Layout } from "components/layout";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

interface IPropsNextProvider {
  children: React.ReactNode;
}

export const NextProvider = ({ children }: IPropsNextProvider) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          {children}
          <ToastContainer
            autoClose={1000}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
          />
          <ReactQueryDevtools />
        </SessionProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export const NextLayout = ({ children }: IPropsNextProvider) => {
  return (
    <div className="layout">
      <NavBar />
      {children}
    </div>
  );
};
