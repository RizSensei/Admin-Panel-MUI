import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard'
import Team from './pages/teams/Team';
import Project from './pages/projects/Project';
import Clients from './pages/clients/Clients';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import EmailPage from './pages/Email/EmailPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/team" element={<PrivateRoute><Team/></PrivateRoute>}/>
          <Route path="/projects" element={<PrivateRoute><Project/></PrivateRoute>}/>
          <Route path="/clients" element={<PrivateRoute><Clients/></PrivateRoute>}/>
          <Route path="/email" element={<PrivateRoute><EmailPage/></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
