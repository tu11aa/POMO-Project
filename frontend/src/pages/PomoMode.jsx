import React from "react";
import styled from "styled-components";
// Sections
import TaskList from "../components/Sections/TaskList";
import Timer from "../components/Sections/Timer";
import HomeButton from "../components/Nav/HomeButton";
export default function PomoMode() {
  return (
    <BgHome>
      <HomeButton />
      <div className="container" style={{height:"100vh"}}>
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
  background: url(https://img.freepik.com/free-vector/pastel-ombre-background-pink-purple_53876-120750.jpg?w=2000);
`;
