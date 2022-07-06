import { Container } from "./soundboard.style";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ApplausePath from "./sounds/applause.mp3";
import BooPath from "./sounds/boo.mp3";
import GaspPath from "./sounds/gasp.mp3";
import TadaPath from "./sounds/tada.mp3";
import VictoryPath from "./sounds/victory.mp3";
import WrongPath from "./sounds/wrong.mp3";
const PlayButton = styled.button`
  border-radius: 5px;
  min-width: 150px;
  padding: 20px 12px;
  background-color: #663399;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  border: none;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #a164df;
`;

function SoundBoard(props) {
  const applauseAudio = new Audio(ApplausePath);
  const booAudio = new Audio(BooPath);
  const gaspAudio = new Audio(GaspPath);
  const tadaAudio = new Audio(TadaPath);
  const victoryAudio = new Audio(VictoryPath);
  const wrongAudio = new Audio(WrongPath);
  //   const [applause, setApplause] = useState(false);
  //   const [boo, setBoo] = useState(false);
  //   const [gasp, setGasp] = useState(false);
  //   const [tada, setTada] = useState(false);
  //   const [victory, setVictory] = useState(false);
  //   const [wrong, setWrong] = useState(false);
  const playsound = (type) => {
    console.log("type", type);
    switch (type) {
      case "applause":
        applauseAudio.play();
        break;
      case "boo":
        booAudio.play();
        break;
      case "gasp":
        gaspAudio.play();
        break;
      case "tada":
        tadaAudio.play();
        break;
      case "victory":
        victoryAudio.play();
        break;
      case "wrong":
        wrongAudio.play();
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    applauseAudio.load();
    return () => {};
  }, []);
  return (
    <Wrapper>
      <PlayButton onClick={() => playsound("applause")}>Applause</PlayButton>
      <PlayButton onClick={() => playsound("boo")}>Boo</PlayButton>
      <PlayButton onClick={() => playsound("gasp")}>Gasp</PlayButton>
      <PlayButton onClick={() => playsound("tada")}>Tada</PlayButton>
      <PlayButton onClick={() => playsound("victory")}>Victory</PlayButton>
      <PlayButton onClick={() => playsound("wrong")}>Wrong</PlayButton>
    </Wrapper>
  );
}

export default SoundBoard;
