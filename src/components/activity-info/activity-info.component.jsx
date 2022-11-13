import styled from "styled-components";

import { DownIcon as PDownIcon } from "@/components/elements";

import lantern from "@/assets/lantern.gif";
import flag from "@/assets/flag.png";
import news from "@/assets/news.png";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000000;
  padding: 5rem 5.63rem;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ActivityStepIndex = styled.div`
  color: #000000;
  background-color: #ffffff;
  border-radius: 50px;
  font-size: 4rem;
  width: 5rem;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;

const ActivityStepName = styled.div`
  font-size: 4rem;
`;

const ActivityStepIcon = styled.img`
  width: 6.25rem;
`;

const ActivityStepDetail = styled.p`
  font-size: 2.5rem;
`;

const ActivityLeftPart = styled.div`
  display: flex;
`

const ActivityStepItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 8.56rem;
  padding: 1.25rem 3.56rem 1.25rem 2.56rem;
  color: white;
  background-color: #9747ff;
  border-radius: 64px;
  color: ${({ fColor }) => fColor};
  background-color: ${({ bgColor }) => bgColor};
  ${({ reversed }) => reversed && `flex-direction: row-reverse`};
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 2rem 0 2rem 3.46rem;
  border-color: transparent transparent transparent #ff392d;

  margin-right: 20px;
`;

const Lantern = styled.img`
  width: 26.81rem;
`;

const IconList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 2.63rem;
`;

const IconListFirstPart = styled.div`
  display: flex;
`;

export const DialogBoxPart = styled.div`
  height: 32%;
  padding: 0 3%;
`;

export const DialogBox = styled.div`
  width: 100%;
  border: 12px solid #ffffff;
  border-radius: 32px;
  background-color: #000000;
  padding: 2rem 7.81rem;
  color: #ffffff;
  font-size: 2.5rem;
  position: relative;
`;

const FlexRowBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexColumnBlock = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-left: 20px;
  }
`;

const TextCenterBlock = styled.div`
  text-align: center;
`;

const DownIcon = styled(PDownIcon)`
  position: absolute;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
  width: 5.13rem;
`;

const ActivityInfo = () => {
  return (
    <Container>
      <Body>
        <ActivityStepItem>
            <ActivityStepIndex>1</ActivityStepIndex>
            <ActivityStepName>報名時間</ActivityStepName>
          <ActivityStepDetail>
            10/13(四) 早上 11:00
            <br />- 11/6(日) 晚上 23:59
          </ActivityStepDetail>
          <ActivityStepIcon src={news} />
        </ActivityStepItem>
        <ActivityStepItem reversed fColor="#000000" bgColor="#FFB547">
          <ActivityStepIndex>2</ActivityStepIndex>
          <ActivityStepName>登錄作品</ActivityStepName>
          <ActivityStepDetail>
            <FlexRowBlock>
              <FlexColumnBlock>
                <TextCenterBlock>10/31</TextCenterBlock>
                <TextCenterBlock>11/7</TextCenterBlock>
              </FlexColumnBlock>
              <FlexColumnBlock>
                <TextCenterBlock>UI、團體組開賽</TextCenterBlock>
                <TextCenterBlock>前端組開賽</TextCenterBlock>
              </FlexColumnBlock>
            </FlexRowBlock>
          </ActivityStepDetail>
          <ActivityStepIcon src={flag} />
        </ActivityStepItem>
        <IconList>
          <IconListFirstPart>
            <Triangle />
            <Triangle />
            <Triangle />
          </IconListFirstPart>
          <Lantern src={lantern} />
        </IconList>
        <DialogBoxPart>
          <DialogBox>
            <p>活動採用 UI、前端接力合作形式，</p>
            <p>前端工程師可採用 UI 設計師的設計稿，</p>
            <p>一同產出完整作品。</p>
          </DialogBox>
        </DialogBoxPart>
      </Body>
      <DownIcon />
    </Container>
  );
};

export default ActivityInfo;
