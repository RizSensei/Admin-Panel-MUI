import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard'
import DisplayTeamData from './pages/teams/DisplayTeamData';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/team" element={<DisplayTeamData/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
