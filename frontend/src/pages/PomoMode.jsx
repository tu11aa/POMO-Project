import React from "react";
import styled from "styled-components";
// Sections
import TaskList from "../components/Sections/TaskList";
import Timer from "../components/Timer/Timer";
import HomeButton from "../components/Nav/HomeButton";
export default function PomoMode() {
  return (
    <BgHome>
      <HomeButton />
      <div className="container" style ={{height: "auto"}}>
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
  
  /* background: #f3d8d8; */
  background-repeat: no-repeat;
  background-size: 100%;
  background: rgb(255,226,226);
  background: linear-gradient(90deg, rgba(255,226,226,1) 0%, rgba(177,168,255,1) 100%, rgba(228,185,255,1) 100%);
`;
