import styled from "styled-components";

import photoBlock from "@/assets/photo-block.png";
import photoKdan from "@/assets/photo-kdan.png";
import photoTitan from "@/assets/photo-titan.png";
import logoBlock from "@/assets/logo-block.png";
import logoKdan from "@/assets/logo-kdan.png";
import logoTitan from "@/assets/logo-titan.png";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #339943;
`;

const TitleWrap = styled.div`
  width: 39.38rem;
  padding: 0.88rem 0;
  margin: 3.56rem auto;
  text-align: center;
  background-color: #e74c4c;
  border: 4px solid #000000;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #000000;
`;

const Body = styled.div`
  width: 100%;
  height: 32.81rem;
  margin-top: 3.56rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const SupporterPhotoWrap = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-end;
`;

const SupporterPhoto = styled.img`
  width: 100%;
`;

const SupporterCardRightPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  text-align: center;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`;

const SupporterLogo = styled.img`
  width: 100%;
`;

const SupporterName = styled.h2`
  font-size: 4rem;
`;

const SupporterCart = styled.div`
  width: 58.06rem;
  height: 100%;
  position: absolute;
  transform: translateX(-50%);
  top: 0;
  left: 50%;
  display: flex;
  justify-content: space-between;
  padding: 2.25rem 4rem 2.25rem 2rem;
  background-color: #ffffff;
  border: 9px solid #000000;
  border-radius: 30px;

  left: ${({ left }) => left};
  ${({ scale }) =>
    scale &&
    `
    transform: translateX(-50%) scale(${scale});
    z-index: -1;
  `};

  ${SupporterPhotoWrap} {
    width: ${({ pWidth }) => pWidth};
  }
`;

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  background-color: #000000;
  color: #ffffff;
  font-family: "Arial";
  font-size: 1.5rem;
  padding: 2.63rem 0;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Arrow = styled.div`
  position: absolute;
  left: 50%;
  top: 55%;
  width: 1.75rem;
  height: 1.75rem;
  border-bottom: 5px solid #9d9d9d;
  border-left: 5px solid #9d9d9d;
  border-bottom-left-radius: 6px;
  z-index: 2;
  cursor: pointer;

  left: ${({ left }) => left};
  transform: ${({ direction }) =>
    `translate(-50%, -50%) rotate(${
      direction === "top"
        ? "135deg"
        : direction === "down"
        ? "-45deg"
        : direction === "right"
        ? "-135deg"
        : "45deg"
    })`};
`;

const SupporterInfo = () => {
  return (
    <Container>
      <TitleWrap>
        <Title>贊助單位</Title>
      </TitleWrap>
      <Body>
        <Arrow left="20.5%" direction="left" />
        <Arrow left="79.5%" direction="right" />
        <SupporterCart>
          <SupporterPhotoWrap>
            <SupporterPhoto src={photoKdan} />
          </SupporterPhotoWrap>
          <SupporterCardRightPart>
            <LogoWrap>
              <SupporterLogo src={logoKdan} />
            </LogoWrap>
            <SupporterName>凱鈿科技</SupporterName>
          </SupporterCardRightPart>
        </SupporterCart>
        <SupporterCart scale="0.85" pWidth="55%" left="100%">
          <SupporterPhotoWrap>
            <SupporterPhoto src={photoBlock} />
          </SupporterPhotoWrap>
          <SupporterCardRightPart>
            <LogoWrap>
              <SupporterLogo src={logoBlock} />
            </LogoWrap>
            <SupporterName>版塊設計</SupporterName>
          </SupporterCardRightPart>
        </SupporterCart>
        <SupporterCart scale="0.85" left="0">
          <SupporterPhotoWrap>
            <SupporterPhoto src={photoTitan} />
          </SupporterPhotoWrap>
          <SupporterCardRightPart>
            <LogoWrap>
              <SupporterLogo src={logoTitan} />
            </LogoWrap>
            <SupporterName>鈦坦科技</SupporterName>
          </SupporterCardRightPart>
        </SupporterCart>
      </Body>
      <Footer>Copyright © 2022 HexSchool.All rights reserved.</Footer>
    </Container>
  );
};

export default SupporterInfo;
