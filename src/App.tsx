import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import FeaturedPostsWrapper from "./components/FeaturedPosts/FeaturedPostsWrapper";
import Footer from "./components/Footer/Footer";
import VideoAdd from "./components/VideoAdd/VideoAdd";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className='App'>
      <Header />
      <LandingPage />
      <FeaturedPostsWrapper />
      {/* <VideoAdd /> */}

      <Footer />
    </div>
  );
}

export default App;
