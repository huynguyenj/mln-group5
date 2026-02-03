import { Route, Routes } from "react-router"
import StartingPage from "./pages/StartingPage"
import ReligionPage from "./pages/ReligionPage"
import ReligionPriciplePage from "./pages/ReligionPriciplePage"
import ReligionVienam from "./pages/ReligionVienam"
import SocialismReligionPage from "./pages/SocialismReligionPage"
import VietnamRelation from "./pages/VietnamRelation"

function App() {

  return (
      <Routes>
        <Route path="/" element={<StartingPage/>}/>
        <Route path="/religion" element={<ReligionPage/>}/>
        <Route path="/principle" element={<ReligionPriciplePage/>}/>
        <Route path="/vietnam-religion" element={<ReligionVienam/>}/>
        <Route path="/vietnam-relation" element={<VietnamRelation/>}/>
        <Route path="/lesson" element={<SocialismReligionPage/>}/>
      </Routes>
  )
}

export default App
