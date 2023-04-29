import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './Component/Card'
import Header from './Component/Header';
import About from './Component/About';
import Contact from './Component/Contact';
import Create from './Component/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Header/>
    
      <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Create />} />
      </Routes>
    
    </>
   
  );
}

export default App;
