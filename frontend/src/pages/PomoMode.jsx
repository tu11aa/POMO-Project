import React from "react";
// Sections
import TaskList from "../components/Sections/TaskList";
import Timer from "../components/Sections/Timer";
import TimerButton from "../components/Sections/TimerButton";
import TimerSettings from "../components/Sections/TimerSettings";
export default function PomoMode() {
  return (
    <>
    <Timer/>
    <TimerButton/>
    <TimerSettings/>
    <TaskList/>
    </>
  );
}
