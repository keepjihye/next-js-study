import Section from "@/components/layout/Section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Section tit="section1" desc="섹션1의 설명입니다.">
        {/* 안에 컨텐츠 넣어야함 */}
        {/* children */}
        <div>
          <ul>
            <li>뉴스리스트 1</li>
            <li>뉴스리스트 2</li>
            <li>뉴스리스트 3</li>
          </ul>
        </div>
      </Section>

      <Section tit="section2" desc="섹션2의 설명입니다.">
        {/* 안에 컨텐츠 넣어야함 */}
      </Section>

      <Section tit="section3" desc="섹션3의 설명입니다.">
        {/* 안에 컨텐츠 넣어야함 */}
      </Section>
    </>
  );

}
