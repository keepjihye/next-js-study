// next.js가 서버기준이므로 client가 사용하는걸 알려줘야함
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
    // 현재 내 페이지가 어딘지 알려줌
    const pathname = usePathname();

    return (
        <header id="header">
            <div className="inner">
                <h1 id="logo">
                    {/* html의 a태그 형식 */}
                    <Link href="/">logo</Link>
                </h1>

                <nav id="gnb">
                    <ul>
                        <li>
                            {/* 삼항연산자 */}
                            {/* 현재 about가 맞다면 참이 실행 */}
                            {/* 조건 ? '참' : '거짓' */}
                            <Link href="/about" className={pathname === "/about" ? "active" : ""}>
                                about
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" className={pathname === "/login" ? "active" : ""}>
                                login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
