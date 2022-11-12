import { useState } from "react";

import {
  Container,
  Body,
  MonsterPart,
  Monster01,
  Monster02,
  Monster03,
  Grass,
  DownIcon,
  DialogBoxPart,
  DialogBox,
  ActionButtonWrapper,
  ActionButton,
} from "./fighting-part.style";

import MonsterRest01 from "@/assets/monster-rest_01.png";
import MonsterRest02 from "@/assets/monster-rest_02.png";

const FightingPart = () => {
  const [process, setProcess] = useState(4); // 1, 2, 3, 4

  return (
    <Container>
      <Grass />
      <Body>
        <MonsterPart>
          <Monster02
            show={process > 1 ? 1 : 0}
            src={process !== 2 && process < 4 && MonsterRest02}
          />
          <Monster01 show src={process !== 1 && process < 4 && MonsterRest01} />
          <Monster03 show={process > 2 ? 1 : 0} />
        </MonsterPart>
        <DialogBoxPart>
          <DialogBox>
            {process > 0 && process < 4 && (
              <p>怪物A:羨慕別人的酷酷網頁動畫？</p>
            )}
            {process > 1 && process < 4 && <p>怪物B:滿足不了同事的許願？</p>}
            {process > 2 && process < 4 && (
              <p>怪物C:動畫技能樹太雜無從下手？</p>
            )}
            {process >= 4 && (
              <ActionButtonWrapper>
                <ActionButton>逃跑</ActionButton>
                <ActionButton>應戰</ActionButton>
              </ActionButtonWrapper>
            )}
            {process < 4 && <DownIcon locate />}
          </DialogBox>
        </DialogBoxPart>
      </Body>
    </Container>
  );
};

export default FightingPart;
