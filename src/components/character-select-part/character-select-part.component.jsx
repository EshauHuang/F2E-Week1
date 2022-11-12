import { useState } from "react";

import CharacterList from "@/components/character-list/character-list.component";
import {
  Container,
  Header,
  Thunder,
  Body,
  Character,
  CharacterTitle,
  FighterChooseBlock,
  FighterChooseBlockTitle,
  JobCard,
  JobTitle,
  DownIcon,
} from "./character-select-part.style";

import character01 from "@/assets/character_01.gif";
import character02 from "@/assets/character_02.png";
import character03 from "@/assets/character_03.png";
import character04 from "@/assets/character_04.png";
import character05 from "@/assets/character_05.png";
import character06 from "@/assets/character_06.png";
import character07 from "@/assets/character_07.png";

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
