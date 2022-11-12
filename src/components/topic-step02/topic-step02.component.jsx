import styled from "styled-components";

import topic01 from "@/assets/topic_01.png";
import topic02 from "@/assets/topic_02.png";
import topic03 from "@/assets/topic_03.png";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000000;
`;

const Body = styled.div`
  width: 100%;
  padding: 0 9%;
`;

const Title = styled.h1`
  font-size: 5.63rem;
  color: #ffe600;
  text-align: center;
  white-space: nowrap;
  margin-top: 5%;
`;

const SubTitleWrap = styled.div`
  width: 100%;
  padding: 0 4%;
`;

const SubTitle = styled.h2`
  padding: 17px 35px;
  background-color: #001aff;
  border-radius: 50px;
  color: white;
  font-weight: 400;
  font-size: 2.25rem;
`;

const StageCardList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3%;
  margin-top: 24px;
`;

const StageCard = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33%);
  aspect-ratio: 1 / 1.44;
`;

const StagePhotoWrap = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 50%;
`;

const StagePhoto = styled.img`
  position: absolute;
  top: -29%;
  left: 0;
  width: 100%;
`;

const StageDetail = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const StageDetailTop = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const StageDateText = styled.p`
  font-size: 2.25rem;
  color: #ffe600;
`;

const StageTopicText = styled.div`
  font-size: 1.5rem;
  padding: 3% 12%;
  margin-left: 4%;
  background-color: #ffe600;
  border-radius: 50px;
`;

const StageDetailBottom = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
`;

const StageTitle = styled.h3`
  font-size: 2.63rem;
  color: #ffffff;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const StageLink = styled.div`
  font-size: 1.5rem;
  align-self: center;
  padding: 17px 48px;
  background-color: #001aff;
  color: #ffffff;
`;

const TopicStep02 = () => {
  return (
    <Container>
      <Title>年度最強合作 三大主題來襲</Title>
      <Body>
        <SubTitleWrap>
          <SubTitle>
            各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡
          </SubTitle>
        </SubTitleWrap>
        <StageCardList>
          <StageCard>
            <StagePhotoWrap>
              <StagePhoto src={topic01} />
            </StagePhotoWrap>
            <StageDetail>
              <StageDetailTop>
                <StageDateText>Week1</StageDateText>
                <StageTopicText>視差滾動</StageTopicText>
              </StageDetailTop>
              <StageDetailBottom>
                <StageTitle>
                  The F2E
                  <br />
                  活動網站設計
                </StageTitle>
                <StageLink>板塊設計</StageLink>
              </StageDetailBottom>
            </StageDetail>
          </StageCard>
          <StageCard>
            <StagePhotoWrap>
              <StagePhoto src={topic02} />
            </StagePhotoWrap>
            <StageDetail>
              <StageDetailTop>
                <StageDateText>Week2</StageDateText>
                <StageTopicText>Canvas</StageTopicText>
              </StageDetailTop>
              <StageDetailBottom>
                <StageTitle>
                  今晚，
                  <br />
                  我想來點點簽
                </StageTitle>
                <StageLink>凱鈿行動科技</StageLink>
              </StageDetailBottom>
            </StageDetail>
          </StageCard>
          <StageCard>
            <StagePhotoWrap>
              <StagePhoto src={topic03} />
            </StagePhotoWrap>
            <StageDetail>
              <StageDetailTop>
                <StageDateText>Week3</StageDateText>
                <StageTopicText>JS draggable</StageTopicText>
              </StageDetailTop>
              <StageDetailBottom>
                <StageTitle>Scrum 新手村</StageTitle>
                <StageLink>鈦坦科技</StageLink>
              </StageDetailBottom>
            </StageDetail>
          </StageCard>
        </StageCardList>
      </Body>
    </Container>
  );
};

export default TopicStep02;
