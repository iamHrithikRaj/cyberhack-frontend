import "./App.css";
import Login from "./pages/Login";
import Congrats from "./pages/Congrats";
import GameScreen from "./pages/GameScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/game" element={<GameScreen />} />
        <Route exact path="/congratulations" element={<Congrats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
