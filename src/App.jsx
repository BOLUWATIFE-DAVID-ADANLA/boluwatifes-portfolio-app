import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/projects";
import Home from "./pages/Home";
import Layout from "./pages/layout";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Layout />} />       
      <Route path="/about" element ={<About />} />       
      <Route path="/projects" element ={<Projects />} />       
      <Route path="/home" element ={<Home />} />   
      <Route path="/blog" element ={<Blog />} />       
    

    </Routes>
    </BrowserRouter>
  );
};

export default App;
