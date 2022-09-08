import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  
  return (
   <BrowserRouter>
   <div className="overallTop">
    <Header />
    <Routes>
      <Route exact='true' path='/' element={<HomePage />}/>
    </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;