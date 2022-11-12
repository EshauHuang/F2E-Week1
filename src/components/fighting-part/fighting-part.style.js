import styled, { css } from "styled-components";

import {
  Monster01 as PMonster01,
  Monster02 as PMonster02,
  Monster03 as PMonster03,
  Grass as PGrass,
  DownIcon as PDownIcon,
} from "@/components/elements";

const monsterStyle = css`
  width: calc((100% - 80px) / 3);
  visibility: hidden;

  ${({ show }) =>
    show &&
    `
      visibility: visible;
  `}
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Monster01 = styled(PMonster01)`
  ${monsterStyle};
`;
export const Monster02 = styled(PMonster02)`
  ${monsterStyle};
`;
export const Monster03 = styled(PMonster03)`
  ${monsterStyle};
`;
export const Grass = styled(PGrass)`
  width: 100%;
  height: 100%;
`;


export const MonsterPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 68%;
`;

export const DownIcon = styled(PDownIcon)`
  bottom: 12%;
  right: 3%;
  width: 9%;
`;


export const DialogBoxPart = styled.div`
  height: 32%;
  padding: 0 3%;
`;

export const DialogBox = styled.div`
  width: 100%;
  height: 90%;
  border: 12px solid #ffffff;
  border-radius: 32px;
  background-color: #000000;
  padding: 25px 68px;
  color: #ffffff;
  font-family: "Cubic 11";
  font-size: 3.5rem;
  position: relative;

  p + p {
    margin-top: 15px;
  }
`;

export const ActionButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ActionButton = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    background-color: #8b8b8b;
  }
`;
