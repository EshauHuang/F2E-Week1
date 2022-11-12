import styled from "styled-components";
import {
  Monster01,
  Monster02,
  Monster03,
  Monster04,
  Grass,
} from "./fighting-part-style";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100;
  height: 100%;
`;

const FightingPart = () => {
  return (
    <Container>
      <Grass />
      <Body>
        <Monster01 />
        <Monster02 />
        <Monster03 />
        <Monster04 />
      </Body>
    </Container>
  );
};

export default FightingPart;
