import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./Preloader";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Resume from "./components/Resume/Resume";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [load, updateload] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateload(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
      <ToastContainer
         position="top-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="dark"
       />
    </BrowserRouter>
  );
};

export default App;
