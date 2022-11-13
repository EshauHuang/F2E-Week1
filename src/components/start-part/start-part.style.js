import styled, { css } from "styled-components";
import {
  Castle as LCastle,
  AttackAlert as LAttackAlert,
  Fire as LFire,
  DownIcon as LDownIcon,
  Grass as PGrass,
  Tree01 as LTree01,
  Tree02 as LTree02,
  Bench as LBench,
  Flower as LFlower,
  Monster01 as LMonster,
} from "@/components/elements";

import grass from "@/assets/grass_01.png"


export const linearText = css`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const linearRainbow = css`
  background-image: linear-gradient(
    270deg,
    #339943 0%,
    #ffef5b 25%,
    #ff392d 50%,
    #9747ff 74.48%,
    #5c94fc 100%
  );
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderWrap = styled.div`
  width: 100%;
  padding: 2.69rem 2.5rem;
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  border: 12px solid white;
  border-radius: 33px;
  text-align: center;
  color: white;
  font-family: "Cubic 11";
  font-weight: 400;
  z-index: 1;

  @media (max-width: 480px) {
    border: 4px solid white;
  }
`;

export const Title = styled.h1`
  font-size: min(12.3rem, 176px);
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

export const SubTitle = styled.h4`
  font-size: min(2.5rem, 36px);
  position: absolute;
  top: 93%;
  right: 2%;
  padding: 0 0.5rem;
  background-color: black;
`;

export const Castle = styled(LCastle)`
  position: relative;
  width: 100%;
  margin-top: -4%;
  z-index: 2;
`;

export const AttackAlert = styled(LAttackAlert)`
  width: 100%;
  padding: 0 6%;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 54%;
  left: 0;
  z-index: 4;
`;

export const StartText = styled.div`
  width: 100%;
  font-size: 3rem;
  color: white;
  text-align: center;
  position: absolute;
  top: 75%;
  left: 0;
  z-index: 4;
`

export const Fire = styled(LFire)`
  z-index: 3;
  max-width: ${({maxWidth}) => maxWidth};
`;

export const Tree01 = styled(LTree01)`
  transform: ${({ mirror }) => mirror && "rotateY(180deg)"};
  z-index: 3;
`;

export const Tree02 = styled(LTree02)`
  transform: ${({ mirror }) => mirror && "rotateY(180deg)"};
  z-index: 3;
`;


export const Bench = styled(LBench)`
  width: 12%;
  z-index: 3;
`;

export const Flower = styled(LFlower)`
  z-index: 3;
`;

export const DownIcon = styled(LDownIcon)`
  position: absolute;
  top: 73%;
  left: 47%;
  width: 7%;
  z-index: 5;
`;

export const Grass01 = styled(PGrass)`
  width: 100%;
`;

export const Grass02 = styled(PGrass)`
  transform: scale(1.2);
  width: 100%;
`;


export const Monster = styled(LMonster)`
  width: 14%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
`;


export const GrassPart = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const GrassContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const CastlePart = styled.section`
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

export const FullSpaceWithGrass = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-size: 100%;
  background-image: url(${grass});
  background-repeat: repeat;
  z-index: -1;
`;
