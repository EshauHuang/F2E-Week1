import styled from "styled-components";

import { DownIcon as PDownIcon } from "@/components/elements";

import purpleBall from "@/assets/purple-ball.png";
import logo6 from "@/assets/logo-6a.png";
import teacher from "@/assets/teacher.png";
import shining from "@/assets/shining.gif";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000000;
  padding: 0 6px;
`;

const Bg = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
`;

const BgText = styled.div`
  display: flex;
  font-size: 6rem;
  color: #000000;
  text-shadow: 3px 0 #ffffff, -3px 0 #ffffff, 0 3px #ffffff, 0 -3px #ffffff;
  white-space: nowrap;

  &:nth-child(2n) {
    justify-content: flex-end;
  }

  p:nth-of-type(2) {
    margin: 0 10px;
  }
`;

const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 9.38rem;
  font-weight: 400;
  color: #ffe600;
  text-shadow: 6px 0 #000000, -6px 0 #000000, 0 6px #000000, 0 -6px #000000;
  margin-top: 4%;
  text-align: center;
`;

const DetailText = styled.div`
  font-size: 2.63rem;
  font-weight: 400;
  color: #000000;
  margin-top: 2%;
  text-align: center;

  p {
    margin-top: 2%;
  }
`;

const Ball = styled.img`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  width: 60%;
`;

const Logo6 = styled.img`
  position: absolute;
  width: 25%;
  left: 13%;
  bottom: 11%;
`;

const Teacher = styled.img`
  position: absolute;
  right: 8%;
  bottom: 0;
  width: 32%;
`;

const Shining = styled.img`
  position: absolute;
  width: 8%;
  bottom: 0;
  transform: translateY(-322%);
  right: 19%;
`;

const DownIcon = styled(PDownIcon)`
  position: absolute;
  left: 50%;
  bottom: 2%;
  transform: translateX(-50%);
  width: 6%;
`;

const TopicStep01 = () => {
  const array = Array.from({ length: 70 }, (_, i) => i);

  return (
    <Container>
      <Bg>
        {array.map((i) => (
          <BgText>
            <p>THE F2E</p>
            <p>THE F2E</p>
            <p>THE F2E</p>
          </BgText>
        ))}
      </Bg>
      <Body>
        <Title>
          年度最強合作
          <br />
          三大主題來襲
        </Title>
        <DetailText>
          <p>The F2E 活動網站設計</p>
          <p>今晚，我想來點點簽</p>
          <p>Scrum 新手村</p>
        </DetailText>
        <Ball src={purpleBall} />
        <Teacher src={teacher} />
        <Logo6 src={logo6} />
        <Shining src={shining} />
        <DownIcon />
      </Body>
    </Container>
  );
};

export default TopicStep01;
