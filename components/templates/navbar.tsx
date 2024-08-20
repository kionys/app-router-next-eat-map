import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <>
      <div className="navbar">
        <Link href="/" className="navbar__logo">
          eatmap
        </Link>
        <div className="navbar__list">
          <Link href="/stores" className="navbar__list--item">
            맛집 목록
          </Link>
          <Link href="/stores/new" className="navbar__list--item">
            맛집 등록
          </Link>
          <Link href="/users/likes" className="navbar__list--item">
            찜한 가게
          </Link>

          {status === "authenticated" ? (
            <button type="button" onClick={() => signOut()}>
              로그아웃
            </button>
          ) : (
            <Link href="/api/auth/signin" className="navbar__list--item">
              로그인
            </Link>
          )}
        </div>
        <div
          role="presentation"
          className="navbar__button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
      </div>
      {/* 모바일 navbar */}
      {isOpen && (
        <div className="navbar--mobile">
          <div className="navbar__list--mobile">
            <Link href="/stores" className="navbar__list--item">
              맛집 목록
            </Link>
            <Link href="/stores/new" className="navbar__list--item">
              맛집 등록
            </Link>
            <Link href="/users/likes" className="navbar__list--item">
              찜한 가게
            </Link>
            {/* <Link href="/api/auth/signin" className="navbar__list--item">
              로그인
            </Link> */}
            {status === "authenticated" ? (
              <button type="button" onClick={() => signOut()}>
                로그아웃
              </button>
            ) : (
              <Link href="/api/auth/signin" className="navbar__list--item">
                로그인
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};
