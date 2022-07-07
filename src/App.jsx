import { Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="bg-red-300 flex flex-col justify-center items-center h-screen w-[100vw]">
      <ul className="flex flex-col">
        <li className="text-white font-bold text-[50px]">
          <Link to="expanding-cards">Expanding Cards</Link>
        </li>
        <li className="text-white font-bold text-[50px]">
          <Link to="progress-steps">Progress Steps</Link>
        </li>
        <li className="text-white font-bold text-[50px]">
          <Link to="rotating-nav">Rotating Nav</Link>
        </li>
        <li className="text-white font-bold text-[50px]">
          <Link to="blurry-loading">Blurrly Loading</Link>
        </li>
        <li className="text-white font-bold text-[50px]">
          <Link to="sound-board">Sound Board</Link>
        </li>
        <li className="text-white font-bold text-[50px]">
          <Link to="dad-jokes">Bad Dad Jokes</Link>
        </li>
        <li className="text-white font-bold text-[50px]">
          <Link to="get-key-code">Get Key Code</Link>
        </li>
        <li className="text-white font-bold text-[50px]">
          <Link to="random-choice">Random Choice Picker</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
