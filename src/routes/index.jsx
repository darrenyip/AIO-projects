import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Loading from "../components/Loading";
const ExpandingCards = lazy(() =>
  import("../pages/expanding-cards/ExpandingCards")
);
const ProgressSteps = lazy(() =>
  import("../pages/progress-steps/ProgressSteps")
);
const RotatingNav = lazy(() => import("../pages/rotating-nav/RotatingNav"));
const BlurryLoading = lazy(() =>
  import("../pages/blurry-loading/BlurryLoading")
);
const SoundBoard = lazy(() => import("../pages/sound-board/SoundBoard"));
const BadDadWapper = lazy(() => import("../pages/bad-dad-jokes/badDadWapper"));
const GetKeyCode = lazy(() => import("../pages/get-key-code/GetKeyCode"));
const RandomChoice = lazy(() => import("../pages/random-choice/RandomChoice"));
const IncrementingCounter = lazy(() =>
  import("../pages/incrementing-counter/IncrementingCounter")
);
const ThemeClock = lazy(() => import("../pages/themed-clock/ThemeClock"));
const Todo = lazy(() => import("../pages/Todo/Todo"));

function RouteConfig(props) {
  return (
    <Suspense fallback={<Loading />}>
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
        <Route path="incrementing-counter" element={<IncrementingCounter />} />
        <Route path="themed-clock" element={<ThemeClock />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </Suspense>
  );
}

export default RouteConfig;
