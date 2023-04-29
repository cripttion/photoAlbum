import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Component/Header';
import About from './Component/About';
import Contact from './Component/Contact';
import Create from './Component/Create';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Header/>
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Create />} />
      </Routes>
    
    </>
   
  );
}

export default App;
