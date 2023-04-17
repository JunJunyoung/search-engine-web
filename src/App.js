import Summoner from "../src/pages/Summoner";
import Main from "../src/pages/Main";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/summoner/:userName" element={<Summoner />} />
    </Routes>
  );
}

export default App;
