import React from 'react'
import Nav from './components/Nav/Nav.jsx';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer.jsx';
import Home from './Page/Home/Home.jsx';
import "./App.css"
import AboutMe from './Page/AboutMe/AboutMe.jsx';
import Contacts from "./Page/Contacts/Contacts";
import Curriculum from "./Page/Curriculum/Curriculum";
import Projects from "./Page/Projects/Projects.jsx";
function App() {
  return (
    <div className='ContainerAll'>
      <Nav/>
      <Routes>
       <Route exact path="/Mi_Portafolio" element={<Home/>} />
       <Route path="/Mi_Portafolio/AboutMe" element={<AboutMe/>} />
       <Route path="/Mi_Portafolio/Contacts" element={<Contacts/>} />
       <Route path="/Mi_Portafolio/Curriculum" element={<Curriculum/>} />
       <Route path="/Mi_Portafolio/Projects" element={<Projects/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
