import React from "react";
import Header from "./Header";
import RecommendedGames from './RecommendedGames';
import Footer from './Footer';
import AboutUsPage from './AboutUsPage';
import TreeMenu from './TreeMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import './App.css';

function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} stopOnHover={false} className="carousel" height="900px">
                  <div>
                    <img src={ require('./images/forspoken-preorder-ps5.jpg')} alt="" />
                  </div>
                  <div>
                    <img src={ require('./images/god-of-war-ragnarok-preorder.jpg')} alt="" />
                  </div>
                  <div>
                    <img src={ require('./images/mario+rabbids-sparks-of-hope-golden-edition.jpg')} alt="" />
                  </div>
                  <div>
                    <img src={ require('./images/mario-rabbids-sparks-of-hope-preorder-content.jpg')} alt="" />
                  </div>
                  <div>
                    <img src={ require('./images/callisto-protocol-exclusive-collectors-edition-bundle-PS5.jpg')} alt="" />
                  </div>
                </Carousel>
                <RecommendedGames />
              </>
            } />
            <Route
            className="about"
            path="/about"
            element={
              <>
                <AboutUsPage />
              </>
            } />
            <Route
            className="games"
            path="/games"
            element={
              <>
                <TreeMenu />
              </>
            } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
