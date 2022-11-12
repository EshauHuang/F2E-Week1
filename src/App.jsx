import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

import Navbar from "@/components/navbar/navbar.component";
import townRock01 from "@/assets/town_rock_01.png";
import castle from "@/assets/castle.png";
import attackAlert from "@/assets/attack-alert.gif";
import fire from "@/assets/fire.gif";
import downIcon from "@/assets/down-icon.png";
import grass from "@/assets/grass.png";
import tree01 from "@/assets/tree_01.png";
import tree02 from "@/assets/tree_02.png";
import bench from "@/assets/bench.png";
import flower from "@/assets/flower.png";
import monster01 from "@/assets/monster_01.png";
import user from "@/assets/user.gif";

const linearText = css`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const linearRainbow = css`
  background-image: linear-gradient(
    270deg,
    #339943 0%,
    #ffef5b 25%,
    #ff392d 50%,
    #9747ff 74.48%,
    #5c94fc 100%
  );
`;

const ImageLocate = styled.img`
  position: absolute;
  ${({ top, left, width }) => `
    top: ${top ? top : 0};
    left: ${left ? left : 0};
    width: ${width ? width : "auto"};
  `}
`;

const Bg = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${townRock01});
  background-size: 3%;
  background-position: 3% 3%;
`;

const Body = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 0 5rem;
`;

const HeaderWrap = styled.div`
  width: 100%;
  padding: 2.69rem 2.5rem;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  border: 12px solid white;
  border-radius: 33px;
  text-align: center;
  color: white;
  font-family: "Cubic 11";
  font-weight: 400;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 12.3rem;
  position: relative;

  &:after {
    content: "";
    background: none;
    content: attr(data-text);
    position: absolute;
    width: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: -1;
    text-shadow: -4px 0 black, 0 4px black, 4px 0 black, 0 -4px black;
  }
`;

const SubTitle = styled.h4`
  font-size: 2.5rem;
  position: absolute;
  top: 93%;
  right: 2%;
  padding: 0 0.5rem;
  background-color: black;
`;

const Castle = styled.img`
  position: relative;
  width: 100%;
  margin-top: -4%;
  z-index: 2;
`;

const AttackAlert = styled.img`
  width: 100%;
  padding: 0 6%;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 54%;
  left: 0;
  z-index: 4;
`;

const Fire = styled(ImageLocate)`
  z-index: 3;
`;

const Tree = styled(ImageLocate)`
  transform: ${({mirror}) => mirror && "rotateY(180deg)"};
  z-index: 3;
`;

const Bench = styled(ImageLocate)`
  width: 12%;
  z-index: 3;
`;

const Flower = styled(ImageLocate)`
  z-index: 3;
`;

const DownIcon = styled.img`
  position: absolute;
  top: 73%;
  left: 47%;
  width: 7%;
  z-index: 5;
`;

const Grass = styled.img`
  width: 100%;
`;

const StartPart = styled.div`
  /* height: calc(100vh - 80px); */
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  max-width: 1280px;
`;

const GrassPart = styled.div`
  position: relative;
  width: 100%;
  height: 460px;
  overflow: hidden;
`;

const GrassContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CastlePart = styled.section`
  position: relative;
  width: 100%;
  background-color: #000000;

  ${({ isStart }) =>
    isStart &&
    `
    background-color: #5C94FC;
    ${Title} {
      ${linearText};
      ${linearRainbow};
    };
    ${SubTitle} {
      background-color: #5C94FC;
      color: black;
    }
  `}
`;

const User = styled.img`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -99%);
  width: 9%;
  z-index: 6;
`;

function App() {
  const [isStart, setIsStart] = useState(true);
  const castleRef = useRef(null);
  const userRef = useRef(null);

  useEffect(() => {
    if (!castleRef.current || !userRef.current) return;
    const castleEl = castleRef.current;
    const userEl = userRef.current;
    castleEl.onload = function () {
      const { bottom } = this.getBoundingClientRect();
      console.log(bottom);
      userEl.style.top = `${bottom}px`;
    };
  }, [castleRef, userRef]);

  return (
    <Bg>
      <Navbar />
      <Body>
        <StartPart>
          <CastlePart isStart={isStart}>
            <HeaderWrap>
              <Header>
                <Title data-text="The F2E 4th">The F2E 4th</Title>
                <SubTitle>互動式網頁設計</SubTitle>
              </Header>
            </HeaderWrap>
            <Castle ref={castleRef} src={castle} />
            {!isStart && <AttackAlert src={attackAlert} />}
            {!isStart && (
              <>
                <Fire top="54%" width="22%" left="6%" src={fire} />
                <Fire top="31%" width="18%" left="68%" src={fire} />
                <Fire top="76.5%" width="20%" left="70%" src={fire} />
              </>
            )}
            {isStart && <DownIcon src={downIcon} />}
          </CastlePart>
          {isStart && (
            <GrassPart>
              <Grass src={grass} />
              <GrassContainer>
                <Tree top="22%" left="34.5%" width="11%" src={tree01} />
                <Tree top="22%" left="55.5%" width="11%" src={tree01} />
                <Tree mirror top="-2%" left="33.5%" width="13%" src={tree02} />
                <Tree mirror top="-2%" left="54.5%" width="13%" src={tree02} />
                <Bench top="5%" left="22.5%" src={bench} />
                <Bench top="5%" left="66.5%" src={bench} />
                <Flower width="7%" top="9%" left="89%" src={flower} />
                <Flower width="7%" top="26%" left="10%" src={flower} />
                <Flower width="7%" top="46%" left="17%" src={flower} />
                <Flower width="7%" top="37%" left="78%" src={flower} />
              </GrassContainer>
            </GrassPart>
          )}
        </StartPart>
      </Body>
      {isStart && <User ref={userRef} src={user} />}
    </Bg>
  );
}

export default App;
