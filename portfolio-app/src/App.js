import Projects from './Containers/Projects';
import Skills from './Containers/Skills';
import About from './Containers/About';
import Contact from './Containers/Contact';
import Home from './Containers/Home';
import NavBar from './Components/NavBar';
// import Particles from 'react-tsparticles';
// import {loadFull} from 'tsparticles';
import {Routes,Route} from 'react-router-dom';
// import particlesConfig from './Utils/Particles';
import React from 'react';
function App() {

  // const particlesInit = useCallback(async (engine) => {
  //   // Properly load the tsparticles engine
  //   console.log(engine); // Optional: Check if engine loads correctly
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   console.log(container); // Optional: Verify the particles container
  // }, []);

  return (
    <div className="App">
      {/*Particles js*/ }
      {/* <Particles id="particles" init={particlesInit} loaded={particlesLoaded} options={particlesConfig}/> */}
      {/*navBar*/ }
      <NavBar/>
      {/*main content page*/ }
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
