import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/AboutPage/About";
import FAQ from "./components/FAQ/FAQ";
function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='about' element={<About />} />
          <Route path='faq' element={<FAQ />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
