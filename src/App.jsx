import LinkWithPreload from "./routes/PreloadLink";
import { routes } from "./routes/index";
import "./App.css";
function App() {
  return (
    <div className="bg-red-300 flex flex-col justify-center items-center h-screen w-[100vw]">
      <ul className="flex flex-col">
        {routes.map((link) => (
          <li className="text-white font-bold text-[50px]">
            <LinkWithPreload to={link.path}>
              {link.componentName}
            </LinkWithPreload>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
