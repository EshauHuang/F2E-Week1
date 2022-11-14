import { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

import Navbar from "@/components/navbar/navbar.component";
import StartPart from "@/components/start-part/start-part.component";
import FightingPart from "@/components/fighting-part/fighting-part.component";
import CharacterSelectPart from "@/components/character-select-part/character-select-part.component.jsx";
import TopicStep01 from "@/components/topic-step01/topic-step01.component.jsx";
import TopicStep02 from "@/components/topic-step02/topic-step02.component.jsx";
import ActivityInfo from "@/components/activity-info/activity-info.component.jsx";
import ActivityRewardInfo from "@/components/activity-reward-info/activity-reward-info.component.jsx";
import SupporterInfo from "@/components/supporter-info/supporter-info.component.jsx";

import { User as LUser } from "@/components/elements";

import townRock01 from "@/assets/town_rock_01.png";

const Container = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${townRock01});
  background-size: 3%;
  background-position: 3% 3%;
`;

const User = styled(LUser)`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -99%);
  width: 9%;
  z-index: 6;
`;

function App() {
  const [isStart, setIsStart] = useState(false);
  const userRef = useRef(null);


  useEffect(() => {
    let handleKeyDownEvent;

    document.addEventListener("keydown", handleKeyDownEvent = function (e) {
      if (e.key === "Enter") {
        setIsStart(true);
        document.removeEventListener("keydown", handleKeyDownEvent);
      }
    });
  }, []);

  return (
    <Container>
      <Navbar />
      <StartPart userRef={userRef} isStart={isStart} />
      {isStart && (
        <>
          <FightingPart />
          <CharacterSelectPart />
          <TopicStep01 />
          <TopicStep02 />
          <ActivityInfo />
          <ActivityRewardInfo />
          <SupporterInfo />
          <User ref={userRef} />
        </>
      )}
    </Container>
  );
}

export default App;
