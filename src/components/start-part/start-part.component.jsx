import { useRef, useEffect } from "react";

import {
  Container,
  CastlePart,
  HeaderWrap,
  Header,
  Title,
  SubTitle,
  Castle,
  AttackAlert,
  Fire,
  DownIcon,
  GrassPart,
  GrassContainer,
  Grass01,
  Grass02,
  Tree01,
  Tree02,
  Bench,
  Flower,
  Monster,
  StartText,
  FullSpaceWithGrass,
} from "./start-part.style";

const StartPart = ({ isStart, userRef }) => {
  const castleRef = useRef(null);

  useEffect(() => {
    if (!castleRef.current || !userRef.current || !isStart) return;
    const castleEl = castleRef.current;
    const userEl = userRef.current;
    const { bottom } = castleEl.getBoundingClientRect();
    console.log(bottom);
    userEl.style.top = `${bottom}px`;
  }, [isStart, castleRef, userRef]);

  return (
    <Container>
      <CastlePart isStart={isStart}>
        <HeaderWrap>
          <Header>
            <Title data-text="The F2E 4th">The F2E 4th</Title>
            <SubTitle>互動式網頁設計</SubTitle>
          </Header>
        </HeaderWrap>
        <Castle ref={castleRef} />
        {!isStart && <AttackAlert />}
        {!isStart && <StartText>請按 Enter 開始</StartText>}
        {!isStart && (
          <>
            <Fire locate top="54%" width="22%" left="6%" maxWidth="264px" />
            <Fire locate top="31%" width="18%" left="68%" maxWidth="212px" />
            <Fire locate top="76.5%" width="20%" left="70%" maxWidth="240px" />
          </>
        )}
        {isStart && <DownIcon />}
      </CastlePart>
      <GrassPart>
        <Grass01 />
        <GrassContainer>
          <Tree01 locate top="22%" left="34.5%" width="11%" />
          <Tree01 locate top="22%" left="55.5%" width="11%" />
          <Tree02 mirror locate top="-2%" left="33.5%" width="13%" />
          <Tree02 mirror locate top="-2%" left="54.5%" width="13%" />
          <Bench locate top="5%" left="22.5%" />
          <Bench locate top="5%" left="66.5%" />
          <Flower width="7%" locate top="9%" left="89%" />
          <Flower width="7%" locate top="26%" left="10%" />
          <Flower width="7%" locate top="46%" left="17%" />
          <Flower width="7%" locate top="37%" left="78%" />
        </GrassContainer>
      </GrassPart>
      {isStart && (
        <GrassPart>
          <Grass02 />
          <GrassContainer>
            <Monster />
          </GrassContainer>
        </GrassPart>
      )}
      {!isStart && <FullSpaceWithGrass></FullSpaceWithGrass>}
    </Container>
  );
};

export default StartPart;
