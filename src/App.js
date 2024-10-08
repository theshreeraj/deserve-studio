import './App.css';
import Aboutus from './pages/aboutus/Aboutus';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/aboutus' element={<Aboutus />} />
   </Routes>
   
   
   </BrowserRouter>
   </>
  );
}

export default App;
