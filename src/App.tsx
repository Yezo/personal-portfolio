import { Route, Routes } from "react-router-dom"
import { About } from "./pages/About"
import { AniFlux } from "./pages/AniFlux"
import { Arkoko } from "./pages/Arkoko"
import { HomePage } from "./pages/HomePage"
import { Snippits } from "./pages/Snippits"

function App() {
  return (
    <div className="bg-gray">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/project/arkoko" element={<Arkoko />}></Route>
        <Route path="/project/aniflux" element={<AniFlux />}></Route>
        <Route path="/project/snippits" element={<Snippits />}></Route>
      </Routes>
    </div>
  )
}

export default App
