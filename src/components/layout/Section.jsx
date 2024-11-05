import React from "react";

const Section = ({ tit, desc, children, bg }) => {
    return (
        // 삼항연산자
        // {조건 ? 참 : 거짓}
        // ``넣어야지 데이터값과 글자를 동시에 쓸 수 있음
        <section className={`sec-g ${bg ? "bg-gray" : ""}`}>
            <div className="inner">
                <h2 className="sec-g__tit">{tit}</h2>
                {/* 조건 && 코드: 조건이 참일때만 출력 */}
                {desc && <p className="sec-g__desc">{desc}</p>}
                <div className="sec-g__cont">{children}</div>
                <a href="#" className="sec-g__more">
                    섹션 더보기
                </a>
            </div>
        </section>
    );
};

export default Section;
