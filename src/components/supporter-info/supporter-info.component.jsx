import { useState, useRef, useEffect, useLayoutEffect } from "react";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";

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
  /* transform: translateX(-50%); */
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
    scale < 1 &&
    `
    scale: ${scale};
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

const initialCardsValue = {
  0: {
    left: "50%",
    scale: 1,
  },
  1: {
    left: "100%",
    scale: 0.85,
  },
  2: {
    left: "0%",
    scale: 0.85,
  },
};

const SupporterInfo = () => {
  const [cardsValue, setCardsValue] = useState(initialCardsValue);
  const cardRefs = useRef([]);
  const initRender = useRef(true);
  const isCardMoving = useRef(3);

  useEffect(() => {
    if (!cardRefs.current) return;
  }, [cardRefs]);

  useLayoutEffect(() => {
    if (!cardRefs.current || !cardRefs.current.length) return;

    Object.keys(cardsValue).forEach((id) => {
      const { left, scale, direction } = cardsValue[id];
      const el = cardRefs.current[id];
      let tl = gsap.timeline();
      const leftNum = Number(left.split("%")[0]);
      tl.set(el, { x: "-50%" });

      if (initRender.current) {
        initRender.current = false;
        return;
      }
      
      if (leftNum === 50) {
        tl.set(el, { zIndex: 1 });
      } else {
        tl.set(el, { zIndex: -1 });
      }

      if (leftNum === 100 && direction === "left") {
        tl.to(el, { left: "-50%", duration: 0.25 });
        tl.set(el, { left: "150%" });
        tl.to(el, {
          left: "100%",
          duration: 0.25,
          onComplete: () => isCardMoving.current++,
        });
      } else if (leftNum === 0 && direction === "right") {
        tl.to(el, { left: "150%", duration: 0.25 });
        tl.set(el, { left: "-50" });
        tl.to(el, {
          left: "0%",
          duration: 0.25,
          onComplete: () => isCardMoving.current++,
        });
      } else {
        tl.to(el, {
          left,
          scale,
          duration: 0.5,
          onComplete: () => isCardMoving.current++,
        });
      }
    });
  }, [cardsValue, cardRefs]);

  const cardMove = (direction, left) => {
    //left: 50% -> 0, 100% -> 50%, 0 -> 100%
    //right: 50% -> 100%, 100% -> 0, 0 -> 50%

    if (!direction || left === "undefined") return;

    let tmpLeft;
    const isPercentStr = typeof left === "string" && left.search("%") >= 0;

    // ex: 50%
    if (isPercentStr) {
      [tmpLeft] = left.split("%");
      tmpLeft = Number(tmpLeft);
    } else {
      tmpLeft = Number(left);
    }

    if (isNaN(tmpLeft)) return;

    if (direction === "left") {
      return tmpLeft - 50 >= 0 ? tmpLeft - 50 : 100;
    }

    if (direction === "right") {
      return tmpLeft + 50 <= 100 ? tmpLeft + 50 : 0;
    }
  };

  const cardScale = (left) => {
    //left: !50% -> scale(0.85),
    //if scale < 1 card will add "z-index: -1" property with styled-components
    if (left === "undefined") return;
    let tmpLeft = Number(left);

    if (tmpLeft === null) return;

    return tmpLeft === 50 ? 1 : 0.85;
  };

  const handleMoveCard = (direction) => {
    if (isCardMoving.current < 3) return;
    isCardMoving.current = 0;
    const newCardsValue = Object.keys(cardsValue).reduce(
      (newCardsValue, id) => {
        const { left } = cardsValue[id];
        const newLeft = cardMove(direction, left);
        const newScale = cardScale(newLeft);

        return {
          ...newCardsValue,
          [id]: {
            left: `${newLeft}%`,
            scale: newScale,
            direction,
          },
        };
      },
      {}
    );

    setCardsValue(newCardsValue);
  };

  return (
    <Container>
      <TitleWrap>
        <Title>贊助單位</Title>
      </TitleWrap>
      <Body>
        <Arrow
          left="20.5%"
          direction="left"
          onClick={() => handleMoveCard("left")}
        />
        <Arrow
          left="79.5%"
          direction="right"
          onClick={() => handleMoveCard("right")}
        />
        <SupporterCart
          ref={(el) => (cardRefs.current[0] = el)}
          scale={1}
          // left={cardsValue[0].left}
        >
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
        <SupporterCart
          ref={(el) => (cardRefs.current[1] = el)}
          scale={0.85}
          pWidth="55%"
          left="100%"
        >
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
        <SupporterCart
          ref={(el) => (cardRefs.current[2] = el)}
          scale="0.85"
          left="0"
        >
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
