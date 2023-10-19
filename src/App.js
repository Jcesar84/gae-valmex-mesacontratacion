import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import LandingPage from './components/landingPage/landingPage';
import LandingTramite from './components/tramite/LandingTramite';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landingPage/:id/:user" element={<LandingPage />} />
          <Route path="/tramite/:id/:user/:folio/:titular" element={<LandingTramite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
