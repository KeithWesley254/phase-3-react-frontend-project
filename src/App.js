import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import GamesPage from './pages/GamesPage';
import HomePage from './pages/HomePage';
import PlayersPage from './pages/PlayersPage';
import RolesPage from './pages/RolesPage';
import TeamsPage from './pages/TeamsPage';

function App() {
  
  return (
   <BrowserRouter>
   <div className="overallTop">
    <Header />
    <Routes>
      <Route exact='true' path='/' element={<HomePage />}/>
      <Route path='/games' element={<GamesPage />}/>
      <Route path='/players' element={<PlayersPage />}/>
      <Route path='/roles' element={<RolesPage />}/>
      <Route path='/teams' element={<TeamsPage />}/>
      <Route path='/about' element={<AboutPage />}/>
    </Routes>
    <Footer />
   </div>
   </BrowserRouter>
  );
}

export default App;