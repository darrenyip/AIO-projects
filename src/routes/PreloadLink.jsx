import { Link, matchPath, useMatch } from "react-router-dom";
import { routes } from "./index";

const preloadRouteComponent = (path) => {
  console.log(
    "Hovered on route ...\n1. preloadRouteComponent: props:path -> ",
    path
  );
  const component = findComponentForRoute(path, routes);
  console.log(
    "3. got component by path",
    component,
    "\nloading the component "
  );
  if (component && component.preload) {
    component.preload();
  }
};
const findComponentForRoute = (path, routes) => {
  const matchingRoute = routes.find((route) => {
    return matchPath(
      {
        path: route.path,
      },
      path
    );
  });
  console.log("2. matchingRoute: ", matchingRoute);
  return matchingRoute ? matchingRoute.component : null;
};

// Export this Link component
const LinkWithPreload = ({ to, ...rest }) => {
  return (
    <Link to={to} onMouseEnter={() => preloadRouteComponent(to)} {...rest} />
  );
};
export default LinkWithPreload;
