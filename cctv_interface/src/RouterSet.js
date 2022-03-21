import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import CCTVPage from "./pages/CCTVPage";
import ComparePage from "./pages/ComparePage";
import MainPage from "./pages/MainPage";
import Padding from "./components/Padding";
import Footer from "./components/Footer";
function RouterSet() {
  return (
    <div className="RouterSet">
      <Navigation />
      <Padding />
      <Routes>
        <Route path="/" exact={true} element={<MainPage />} />
        <Route path="/cctv" exact={true} element={<CCTVPage />} />
        <Route path="/compare" exact={true} element={<ComparePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default RouterSet;
