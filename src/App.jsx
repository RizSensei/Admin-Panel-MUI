import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard'
import Team from './pages/teams/Team';
import Project from './pages/projects/Project';
import Clients from './pages/clients/Clients';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/projects" element={<Project/>}/>
          <Route path="/clients" element={<Clients/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
