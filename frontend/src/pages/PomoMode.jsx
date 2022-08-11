import React from "react";
import styled from "styled-components";
// Sections
import TaskList from "../components/Sections/TaskList";
import Timer from "../components/Timer/Timer";
import HomeButton from "../components/Nav/HomeButton";
export default function PomoMode() {
  return (
    <BgHome>
      <HomeButton/>
      <div className="container">
        <Timer />
        <br />
        <TaskList />
      </div>
    </BgHome>
  );
}

const BgHome = styled.div`
  /* width: 100vw;
  height: 100vh; */
  width: auto;
  height: auto;
  background: #f3d8d8;
`;
