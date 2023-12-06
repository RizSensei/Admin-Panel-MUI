import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard'
import Team from './pages/teams/Team';
import Project from './pages/projects/Project';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/project" element={<Project/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
