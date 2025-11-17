import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AnimatedBackground from "./Components/AnimatedBackground";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import TodoApp from "./components/TodoApp";
import Calculator from "./components/Calculator";
import WeatherApp from "./components/WeatherApp";
import "./style.css";

export default function App() {
  return (
    <Router>
      <AnimatedBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
