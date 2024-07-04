import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/AboutPage/About";
import FAQ from "./components/FAQ/FAQ";
import Details from "./components/DetailsPage/Details";
import Products from "./components/Products/Products";
import Biscuits from "./components/Biscuits/Biscuits";

function App() {
  return (
    <div className='App'>
      <Biscuits />
      <CookiesProvider>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='about' element={<About />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='details' element={<Details />} />
            <Route path='products' element={<Products />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </CookiesProvider>
    </div>
  );
}

export default App;
