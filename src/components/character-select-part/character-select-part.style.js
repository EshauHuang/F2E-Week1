import styled, { css } from "styled-components";

import { Thunder as PThunder } from "@/components/elements";
import { DownIcon as PDownIcon } from "@/components/elements";

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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-size: 7.5rem;
  color: #ffe600;
  text-align: center;
  font-weight: 400;
`;

export const Thunder = styled(PThunder)`
  width: 6%;
  height: 100%;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 3% 10%;
`;

export const Character = styled.div`
  width: 50%;
  z-index: 1;

  img {
    width: 100%;
  }
`;

export const FighterChooseBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  z-index: 1;
  text-align: center;
`;

export const FighterChooseBlockTitle = styled.h3`
  position: relative;
  font-size: 2.5rem;
  ${linearText};
  background-image: linear-gradient(180deg, #ffb547 0%, #ffef5b 100%);

  &:after {
    content: "";
    background: none;
    content: attr(data-text);
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: -1;
    text-shadow: -2px 0 #ff392d, 0 2px #ff392d, 2px 0 #ff392d, 0 -2px #ff392d;
    white-space: nowrap;
  }
`;

export const CharacterTitle = styled.h2`
  font-size: 4rem;
  color: #ffffff;
  text-align: center;
  margin-top: 29px;
  font-weight: 400;
  position: relative;

  ${({ isColor }) =>
    isColor &&
    `
    ${linearText};
    background-image: linear-gradient(180deg, #ffb547 0%, #ffef5b 100%);
    &:after {
      content: "";
      background: none;
      content: attr(data-text);
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      z-index: -1;
      text-shadow: -2px 0 #ff392d, 0 2px #ff392d, 2px 0 #ff392d, 0 -2px #ff392d;
      white-space: nowrap;
    }
  `}
`;

export const JobCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobTitle = styled.h3`
  margin: 16px;
  font-size: 2.5rem;
  color: #ffffff;
  text-shadow: 2px 0 #ff392d, -2px 0 #ff392d, 0 2px #ff392d, 0 -2px #ff392d;
`;

export const DownIcon = styled(PDownIcon)`
  position: absolute;
  width: 6%;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
`;
