import styled, { css } from "styled-components";

export const linearText = css`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 2.5rem 5rem 7.5rem;
  background-color: #000000;
  white-space: nowrap;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  p {
    font-size: 2.25rem;
  }
`;

const Body = styled.div`
  width: 100%;
  padding: 3.75rem 1.88rem;
  background-color: #ffffff;
  border: 4px solid #000000;
  border-radius: 32px;
`;

const TitleWrap = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  z-index: 1;
`;

const Title = styled.div`
  position: relative;
  font-size: 3rem;
  ${linearText};
  background-image: linear-gradient(0deg, #ffe600 0%, #ffffff 100%);

  &:after {
    content: "";
    background: none;
    content: attr(data-text);
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: -1;
    text-shadow: -3px 0 #000000, 0 3px #000000, 3px 0 #000000, 0 -3px #000000;
    white-space: nowrap;
  }
`;

const FlexRowBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2.5rem;
`;

const ReviewPart = styled.div`
  width: calc((100% - 3.19rem) / 2);
  display: flex;
  flex-direction: column;
`;

const ReviewTitle = styled.h2`
  width: 100%;
  padding: 0.63rem 1.69rem;
  color: #ffffff;
  background-color: #000000;
`;

const ReviewContent = styled.div`
  width: 100%;
  padding: 1.13rem 0.5rem 1.13rem 1.69rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #d9d9d9;
  flex-grow: 1;

  h3 {
    margin-bottom: 0.63rem;
  }

  p {
    line-height: 3rem;
  }
`;

const RewardPart = styled.div`
  width: calc((100% - 3.19rem) / 2);
  display: flex;
  flex-direction: column;
`;

const RewardTitle = styled.h2`
  width: 100%;
  color: #ffffff;
  background-color: #000000;
  padding: 0.63rem 1.69rem;
`;

const RewardContent = styled.div`
  width: 100%;
  padding: 2.63rem 2.63rem 2.75rem;
  flex-grow: 1;
  background-color: #d9d9d9;

  p + p {
    margin-top: 1.13rem;
  }

  h3 {
    text-align: center;
    margin-top: 2.56rem;
  }
`;

const ActivityRewardInfo = () => {
  return (
    <Container>
      <Body>
        <TitleWrap>
          <Title data-text="區區修煉已經無法滿足了嗎？還有比賽等著你！">
            區區修煉已經無法滿足了嗎？還有比賽等著你！
          </Title>
        </TitleWrap>
        <FlexRowBlock>
          <ReviewPart>
            <ReviewTitle>評審機制</ReviewTitle>
            <ReviewContent>
              <div>
                <h3>初審</h3>
                <p>
                  將由六角學院前端、UI 評審
                  <br />
                  進行第一波篩選。
                </p>
              </div>
              <div>
                <h3>決選</h3>
                <p>
                  由六角學院與贊助廠商討論，
                  <br />
                  進行最後篩選，並於 12/30(五)
                  <br />
                  由評審進行直播公布名單！
                </p>
              </div>
            </ReviewContent>
          </ReviewPart>
          <RewardPart>
            <RewardTitle>獎項</RewardTitle>
            <RewardContent>
              <p>初選佳作 共六十位 數位獎狀</p>
              <p>
                個人企業獎 共六位
                <br />
                NTD 3,000/位
              </p>
              <p>
                團體企業獎 共三組
                <br />
                NTD 10,000/組
              </p>
              <h3>以上皆提供完賽數位獎狀</h3>
            </RewardContent>
          </RewardPart>
        </FlexRowBlock>
      </Body>
    </Container>
  );
};

export default ActivityRewardInfo;
