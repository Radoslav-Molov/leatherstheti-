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
import PrivacyAndPolicy from "./components/PrivacyAndTerms/PrivacyAndPolicy";
import Shipping from "./components/PrivacyAndTerms/Shipping";
import TermsAndConditions from "./components/PrivacyAndTerms/TermsAndConditions";
import Checkout from "./components/Checkout/Checkout";
import { Fab, Modal } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function App() {
  const [checkoutModal, setCheckoutModal] = useState(false);

  const handleChekoutClose = () => {
    setCheckoutModal(false);
  };

  const openCartModal = () => {
    setCheckoutModal(true);
  };

  return (
    <div className='App'>
      <Biscuits />
      <Modal
        open={checkoutModal}
        onClose={handleChekoutClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Checkout />
      </Modal>
      <CookiesProvider>
        <Header />

        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='about' element={<About />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='details' element={<Details />} />
          <Route path='products' element={<Products />} />
          <Route path='privacy&policy' element={<PrivacyAndPolicy />} />
          <Route path='shipping' element={<Shipping />} />
          <Route path='terms&conditions' element={<TermsAndConditions />} />
        </Routes>

        <Fab
          id='cart_floaty'
          size='large'
          color='primary'
          aria-label='cart'
          onClick={openCartModal}
        >
          <ShoppingCartIcon />
        </Fab>

        <Footer />
      </CookiesProvider>
    </div>
  );
}

export default App;
