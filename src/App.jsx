import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/projects";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default route */}
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
