import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "db";
import { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

// https://velog.io/@yejine2/Next.js-App-Router%EC%97%90%EC%84%9C-authOptions-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0
export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt", // jwt 기반의 session을 사용
    maxAge: 60 * 60 * 24, // 24시간으로 설정
    updateAge: 60 * 60 * 2, // session 업데이트 주기, 2시간으로 설정
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true, // 계정간 이메일 값이 동일할 경우 예외처리 | https://next-auth.js.org/configuration/providers/oauth#allowdangerousemailaccountlinking-option
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/users/login", // signIn 함수를 실행하면 /users/login로 리다이렉트 시킨다.
  },
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
};
