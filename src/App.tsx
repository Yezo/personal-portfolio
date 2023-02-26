import { Route, Routes } from "react-router-dom";
import { AniFlux } from "./pages/AniFlux";
import { Arkoko } from "./pages/Arkoko";
import { HomePage } from "./pages/HomePage";
import { Snippits } from "./pages/Snippits";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/project/arkoko" element={<Arkoko />}></Route>
      <Route path="/project/aniflux" element={<AniFlux />}></Route>
      <Route path="/project/snippits" element={<Snippits />}></Route>
    </Routes>
  );
}

export default App;
