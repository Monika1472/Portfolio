import Projects from './Containers/Projects';
import Skills from './Containers/Skills';
import About from './Containers/About';
import Contact from './Containers/Contact';
import Home from './Containers/Home';
import NavBar from './Components/NavBar';
import {Routes,Route} from 'react-router-dom';
import React from 'react';
function App() {



  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/About Me" element={<About/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
