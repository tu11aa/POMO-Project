import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import PomoMode from "./pages/PomoMode";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ChatRoom from "./components/ChatRoom/index";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pomomode" element={<PomoMode />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<ChatRoom/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
