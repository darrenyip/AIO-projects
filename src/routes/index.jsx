import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Loading from "../components/Loading";

const ReactLazyPreload = (importStatement) => {
  const Component = lazy(importStatement);
  Component.preload = importStatement;
  return Component;
};

const Todo = ReactLazyPreload(() => import("../pages/Todo/Todo"));
// const Todo = lazy(() => import("../pages/Todo/Todo"));
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

export const routes = [
  {
    path: "/expanding-cards",
    exact: true,
    component: ExpandingCards,
    componentName: "ExpandingCards",
  },
  {
    path: "/progress-steps",
    exact: true,
    component: ProgressSteps,
    componentName: "Progress Steps",
  },
  {
    path: "/rotating-nav",
    exact: true,
    component: RotatingNav,
    componentName: "Rotating Nav",
  },
  {
    path: "/blurry-loading",
    exact: true,
    component: BlurryLoading,
    componentName: "Blurry Loading",
  },
  {
    path: "/sound-board",
    exact: true,
    component: SoundBoard,
    componentName: "SoundBoard",
  },
  {
    path: "/dad-jokes",
    exact: true,
    component: BadDadWapper,
    componentName: "Bad Dad Joke",
  },
  {
    path: "/get-key-code",
    exact: true,
    component: GetKeyCode,
    componentName: "Get Key Code",
  },
  {
    path: "/todo",
    exact: true,
    component: Todo,
    componentName: "Todo",
  },
  {
    path: "/themed-clock",
    exact: true,
    component: ThemeClock,
    componentName: "Theme Clock",
  },
  {
    path: "/incrementing-counter",
    exact: true,
    component: IncrementingCounter,
    componentName: "Incrementing Counter",
  },
  {
    path: "/random-choice",
    exact: true,
    component: RandomChoice,
    componentName: "Random Choice",
  },
];

function RouteConfig(props) {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<App />} />
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default RouteConfig;
