import { useState } from "react";
import styled, { css } from "styled-components";

import { Thunder as PThunder } from "@/components/elements";
import { DownIcon as PDownIcon } from "@/components/elements";
import CharacterList from "@/components/character-list/character-list.component";

import character01 from "@/assets/character_01.gif";
import character02 from "@/assets/character_02.png";
import character03 from "@/assets/character_03.png";
import character04 from "@/assets/character_04.png";
import character05 from "@/assets/character_05.png";
import character06 from "@/assets/character_06.png";
import character07 from "@/assets/character_07.png";

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

const Header = styled.h1`
  font-size: 7.5rem;
  color: #ffe600;
  text-align: center;
  font-weight: 400;
`;

const Thunder = styled(PThunder)`
  width: 6%;
  height: 100%;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 3% 10%;
`;

const Character = styled.div`
  width: 50%;
  z-index: 1;

  img {
    width: 100%;
  }
`;

const FighterChooseBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  z-index: 1;
  text-align: center;
`;

const FighterChooseBlockTitle = styled.h3`
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

const CharacterTitle = styled.h2`
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

const JobCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobTitle = styled.h3`
  margin: 16px;
  font-size: 2.5rem;
  color: #ffffff;
  text-shadow: 2px 0 #ff392d, -2px 0 #ff392d, 0 2px #ff392d, 0 -2px #ff392d;
`;

const DownIcon = styled(PDownIcon)`
  position: absolute;
  width: 6%;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
`;

const characters = [
  {
    id: 0,
    imageUrl: character01,
    title: "選擇你的角色",
  },
  {
    id: 1,
    imageUrl: character02,
    title: "UI 新手",
  },
  {
    id: 2,
    imageUrl: character03,
    title: "前端新手",
  },
  {
    id: 3,
    imageUrl: character04,
    title: "UI 設計師",
  },
  {
    id: 4,
    imageUrl: character05,
    title: "前端工程師",
  },
  {
    id: 5,
    imageUrl: character06,
    title: "UI 生物",
  },
  {
    id: 6,
    imageUrl: character07,
    title: "前端生物",
  },
];

const CharacterSelectPart = () => {
  const [characterSelectIndex, setCharacterSelectIndex] = useState(0);

  const characterSelect = characters[characterSelectIndex];

  return (
    <Container>
      <Header>互動式網頁設計</Header>
      <Thunder locate top="0" left="0" />
      <Thunder locate top="0" right="0" />
      <Body>
        <Character>
          <img src={characterSelect.imageUrl} />
          <CharacterTitle
            isColor={characterSelectIndex !== 0 ? 1 : 0}
            data-text={characterSelect.title}
          >
            {characterSelect.title}
          </CharacterTitle>
        </Character>
        <FighterChooseBlock>
          <FighterChooseBlockTitle data-text="CHOOSE A FIGHTER">
            CHOOSE A FIGHTER
          </FighterChooseBlockTitle>
          <JobCard>
            <JobTitle>UI 設計師</JobTitle>
            <CharacterList
              setCharacterSelectIndex={setCharacterSelectIndex}
              characters={characters.slice(1, 4)}
            />
          </JobCard>
          <JobCard>
            <JobTitle>前端工程師</JobTitle>
            <CharacterList
              setCharacterSelectIndex={setCharacterSelectIndex}
              characters={characters.slice(4)}
            />
          </JobCard>
        </FighterChooseBlock>
      </Body>
      <DownIcon />
    </Container>
  );
};

export default CharacterSelectPart;
