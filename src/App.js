import Summoner from "../src/pages/Summoner";
import Community from "../src/pages/Community";
import Main from "../src/pages/Main";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/summoner" element={<Summoner />} />
      <Route exact path="/community" element={<Community />} />
    </Routes>
  );
}

export default App;
