import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import styled, { css } from "styled-components";

gsap.registerPlugin(ScrollTrigger);

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
  const monsterRef = useRef(null);
  const bottomGrassRef = useRef(null);

  useEffect(() => {
    if (!monsterRef.current || !bottomGrassRef.current || !isStart) return;

    // monsterRef.current.onload = function () {
    //   gsap.to(userRef.current, {
    //     scrollTrigger: {
    //       trigger: monsterRef.current,
    //       onEnter: () => console.log("enter3"),
    //       start: "-300 80%",
    //       end: "-300 80%",
    //       markers: true,
    //       pin: true,
    //     },
    //   });
    // };
    bottomGrassRef.current.onload = function () {
      console.log("first")
      gsap.to(userRef.current, {
        scrollTrigger: {
          trigger: bottomGrassRef.current,
          onEnter: () => console.log("enter3"),
          start: "-200 60%",
          end: "top 60%",
          markers: true,
        },
      });
    };
  }, [isStart, monsterRef, bottomGrassRef]);

  useEffect(() => {
    let handleKeyDownEvent;

    document.addEventListener(
      "keydown",
      (handleKeyDownEvent = function (e) {
        console.log("object");
        if (e.key === "Enter") {
          setIsStart(true);
          document.removeEventListener("keydown", handleKeyDownEvent);
        }
      })
    );
  }, []);

  return (
    <Container>
      <Navbar />
      <StartPart
        bottomGrassRef={bottomGrassRef}
        monsterRef={monsterRef}
        userRef={userRef}
        isStart={isStart}
      />
      {isStart && (
        <>
          {/* <FightingPart />
          <CharacterSelectPart />
          <TopicStep01 />
          <TopicStep02 />
          <ActivityInfo />
          <ActivityRewardInfo />
          <SupporterInfo /> */}
          <User ref={userRef} />
        </>
      )}
    </Container>
  );
}

export default App;
