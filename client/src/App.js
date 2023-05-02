import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Component/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Create from './Pages/Create';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testing from './Component/Testing';
import Bottom from './Component/Bottom';

function App() {
  return (
    <>
    <Header/>
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Testing />} />
      </Routes>
    <Bottom />
    </>
   
  );
}

export default App;
