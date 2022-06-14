import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Team from "./pages/Team"
import Blogs from "./pages/Blogs"
import Events from "./pages/Events"
import './styles/App.css';
import Navbar from './components/Navbar';


function App() {
  return (
     <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/about" element={<About/> } />
        <Route path="/team" element={<Team/> } />
        <Route path="/events" element={<Events/> } />
        <Route path="/blogs" element={<Blogs/> } />
      </Routes>
     </>
  );
}

export default App;
