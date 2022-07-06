import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import ExpandingCards from "./pages/expanding-cards/ExpandingCards";
import ProgressSteps from "./pages/progress-steps/ProgressSteps";
import RotatingNav from "./pages/rotating-nav/RotatingNav";
import BlurryLoading from "./pages/blurry-loading/BlurryLoading";
import SoundBoard from "./pages/sound-board/SoundBoard";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="expanding-cards" element={<ExpandingCards />} />
        <Route path="progress-steps" element={<ProgressSteps />} />
        <Route path="rotating-nav" element={<RotatingNav />} />
        <Route path="blurry-loading" element={<BlurryLoading />} />
        <Route path="sound-board" element={<SoundBoard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
