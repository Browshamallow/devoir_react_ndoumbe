import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Components/Header/index.jsx";
import './App.css'
import Footer from "./Components/Footer/index.jsx";
import About from "./Pages/About/index.jsx";
import Erreur from "./Pages/Erreur/index.jsx";
import Detail from "./Pages/Detail/index.jsx";
import Home from "./Pages/Acceuil/index.jsx";
import Contact from "./Pages/Contact/index.jsx";


function App() {

  return (
    <>
       <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="detail/:id" element={<Detail/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>

          <Route path="*" element={<Erreur/>}></Route>
        </Routes>
        
      
      </main>
      <Footer/>
      </Router>
     
    </>
  )
}

export default App
