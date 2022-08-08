import TimerFunction from "./TimerFuction";
import TimerSettings from "./TimerSettings";
import {useState} from "react";
import SettingsContext from "./SettingsContext";
import './Timer.css'

function Timer() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <TimerSettings /> : <TimerFunction />}
      </SettingsContext.Provider>
    </main>
  );
}

export default Timer;