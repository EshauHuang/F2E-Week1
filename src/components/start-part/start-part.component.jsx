import { useRef, useEffect, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

import {
  Container,
  CastlePart,
  HeaderWrap,
  Header,
  Title,
  SubTitle,
  Castle,
  AttackAlert,
  Fire,
  DownIcon,
  GrassPart,
  GrassContainer,
  Grass01,
  Grass02,
  Tree01,
  Tree02,
  Bench,
  Flower,
  Monster,
  StartText,
  FullSpaceWithGrass,
} from "./start-part.style";

const StartPart = ({ isStart, userRef, monsterRef, bottomGrassRef }) => {
  const castleRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!isStart || !castleRef.current || !headerRef.current) return;

    gsap.to(".moveEl", {
      scrollTrigger: {
        trigger: headerRef.current,
        // onEnter: () => console.log("enter"),
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: "-200",
    });

    userRef.current.onload = function () {
      // 依照裝置大小調整 user 速度，草叢圖片最大
      const deviceWidth = window.innerWidth;
      gsap.to(userRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          // onEnter: () => console.log("enter2"),
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: "-400",
      });
    };
  }, [isStart, castleRef, headerRef, userRef]);

  useEffect(() => {
    if (!castleRef.current || !userRef.current || !isStart) return;
    const castleEl = castleRef.current;
    const userEl = userRef.current;
    const { bottom } = castleEl.getBoundingClientRect();
    userEl.style.top = `${bottom}px`;
  }, [isStart, castleRef, userRef]);

  return (
    <Container>
      <CastlePart isStart={isStart}>
        <HeaderWrap ref={headerRef}>
          <Header>
            <Title data-text="The F2E 4th">The F2E 4th</Title>
            <SubTitle>互動式網頁設計</SubTitle>
          </Header>
        </HeaderWrap>
        <Castle className="moveEl" ref={castleRef} />
        {!isStart && <AttackAlert />}
        {!isStart && <StartText>請按 Enter 開始</StartText>}
        {!isStart && (
          <>
            <Fire locate top="54%" width="22%" left="6%" maxWidth="264px" />
            <Fire locate top="31%" width="18%" left="68%" maxWidth="212px" />
            <Fire locate top="76.5%" width="20%" left="70%" maxWidth="240px" />
          </>
        )}
      </CastlePart>
      <GrassPart className="moveEl">
        <Grass01 />
        <GrassContainer>
          <Tree01 locate top="22%" left="34.5%" width="11%" />
          <Tree01 locate top="22%" left="55.5%" width="11%" />
          <Tree02 mirror locate top="-2%" left="33.5%" width="13%" />
          <Tree02 mirror locate top="-2%" left="54.5%" width="13%" />
          <Bench locate top="5%" left="22.5%" />
          <Bench locate top="5%" left="66.5%" />
          <Flower width="7%" locate top="9%" left="89%" />
          <Flower width="7%" locate top="26%" left="10%" />
          <Flower width="7%" locate top="46%" left="17%" />
          <Flower width="7%" locate top="37%" left="78%" />
        </GrassContainer>
      </GrassPart>
      {isStart && (
        <GrassPart className="moveEl">
          <Grass02 ref={bottomGrassRef} />
          <GrassContainer>
            <Monster ref={monsterRef} />
          </GrassContainer>
        </GrassPart>
      )}
      {!isStart && <FullSpaceWithGrass />}
    </Container>
  );
};

export default StartPart;
