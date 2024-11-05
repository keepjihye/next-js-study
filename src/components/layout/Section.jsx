import React from "react";

const Section = ({ tit, desc, children }) => {
    return (
        <section className="sec-g">
            <div className="inner">
                <h2 className="sec-g__tit">{tit}</h2>
                <p className="sec-g__desc">{desc}</p>
                <div className="sec-g__cont">{children}</div>
                <a href="#" className="sec-g__more">
                    섹션 더보기
                </a>
            </div>
        </section>
    );
};

export default Section;
