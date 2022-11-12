import { forwardRef } from "react"
import styled from "styled-components"

import user from "@/assets/user.gif";
import castle from "@/assets/castle.png";
import attackAlert from "@/assets/attack-alert.gif";
import fire from "@/assets/fire.gif";
import downIcon from "@/assets/down-icon.png";
import grass from "@/assets/grass_01.png";
import tree01 from "@/assets/tree_01.png";
import tree02 from "@/assets/tree_02.png";
import bench from "@/assets/bench.png";
import flower from "@/assets/flower.png";
import monster01 from "@/assets/monster_01.gif";
import monster02 from "@/assets/monster_02.gif";
import monster03 from "@/assets/monster_03.png";
import monster04 from "@/assets/monster_04.gif";

export const Image = styled.img`
  width: 100%;
  position: relative;

  ${({ locate, top, left, width }) => locate && `
    position: absolute;
    top: ${top ? top : "auto"};
    left: ${left ? left : "auto"};
    width: ${width ? width : "auto"};
  `}
`;

export const User = forwardRef((props, ref) => (
  <Image ref={ref} {...props} src={user} />
));
export const Castle = forwardRef((props, ref) => (
  <Image ref={ref} {...props} src={castle} />
));
export const AttackAlert = (props) => <Image {...props} src={attackAlert} />;
export const Fire = (props) => <Image {...props} src={fire} />;
export const DownIcon = (props) => <Image {...props} src={downIcon} />;
export const Tree01 = (props) => <Image {...props} src={tree01} />;
export const Tree02 = (props) => <Image {...props} src={tree02} />;
export const Bench = (props) => <Image {...props} src={bench} />;
export const Flower = (props) => <Image {...props} src={flower} />;
export const Monster01 = (props) => <Image {...props} src={monster01} />;
export const Monster02 = (props) => <Image {...props} src={monster02} />;
export const Monster03 = (props) => <Image {...props} src={monster03} />;
export const Monster04 = (props) => <Image {...props} src={monster04} />;

export const Grass = (props) => <Image {...props} src={grass} />;
