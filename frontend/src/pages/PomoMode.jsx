import React from "react";
import styled from "styled-components";
// Sections
import TaskList from "../components/Sections/TaskList";
import Timer from "../components/Sections/Timer";
import TimerButton from "../components/Sections/TimerButton";
import TimerSettings from "../components/Sections/TimerSettings";
export default function PomoMode() {
  return (
    <BgHome>
      <div className="container">
        <Timer />
        <TimerSettings />
        <br />
        <TimerButton />
        <TaskList />
      </div>
    </BgHome>
  );
}

const BgHome = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f3d8d8;
`;
