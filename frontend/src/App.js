import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import PomoMode from "./pages/PomoMode";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pomomode" element={<PomoMode />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
