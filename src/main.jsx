import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import ExpandingCards from "./pages/expanding-cards/ExpandingCards";
import ProgressSteps from "./pages/progress-steps/ProgressSteps";
import RotatingNav from "./pages/rotating-nav/RotatingNav";
import BlurryLoading from "./pages/blurry-loading/BlurryLoading";
import SoundBoard from "./pages/sound-board/SoundBoard";
import BadDadWapper from "./pages/bad-dad-jokes/badDadWapper";
import GetKeyCode from "./pages/get-key-code/GetKeyCode";
import RandomChoice from "./pages/random-choice/RandomChoice";
import IncrementingCounter from "./pages/incrementing-counter/IncrementingCounter";
import ThemeClock from "./pages/themed-clock/ThemeClock";
import Todo from "./pages/Todo/Todo";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="expanding-cards" element={<ExpandingCards />} />
          <Route path="progress-steps" element={<ProgressSteps />} />
          <Route path="rotating-nav" element={<RotatingNav />} />
          <Route path="blurry-loading" element={<BlurryLoading />} />
          <Route path="sound-board" element={<SoundBoard />} />
          <Route path="dad-jokes" element={<BadDadWapper />} />
          <Route path="get-key-code" element={<GetKeyCode />} />
          <Route path="random-choice" element={<RandomChoice />} />
          <Route
            path="incrementing-counter"
            element={<IncrementingCounter />}
          />
          <Route path="themed-clock" element={<ThemeClock />} />
          <Route path="todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
