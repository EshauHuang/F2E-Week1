import { useState, useRef } from "react";
import styled, { css } from "styled-components";

import Navbar from "@/components/navbar/navbar.component";
import StartPart from "@/components/start-part/start-part.component";
import FightingPart from "@/components/fighting-part/fighting-part.component"

import { User as LUser } from "@/components/elements"

import townRock01 from "@/assets/town_rock_01.png";

const Bg = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${townRock01});
  background-size: 3%;
  background-position: 3% 3%;
`;

const Body = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 0 5rem;
`;

const User = styled(LUser)`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -99%);
  width: 9%;
  z-index: 6;
`;

function App() {
  const [isStart, setIsStart] = useState(true);
  const userRef = useRef(null);

  return (
    <Bg>
      {/* <Navbar /> */}
      <Body>
        {/* <StartPart userRef={userRef} isStart={isStart} /> */}
        <FightingPart />
      </Body>
      {/* {isStart && <User ref={userRef}/>} */}
    </Bg>
  );
}

export default App;
