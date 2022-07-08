import styled from "styled-components";

const ThemedWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in;
  background-color: ${({ isLight }) => (isLight ? "white" : "#000")};
`;
// ${({isLight})=>(isLight?"":"")};
const ThemedButton = styled.button`
  margin-bottom: 200px;
  border-radius: 8px;
  padding: 12px 24px;
  transition: all 0.3s ease-in;
  color: ${({ isLight }) => (isLight ? "white" : "#000")};
  background-color: ${({ isLight }) => (isLight ? "#000" : "white")};
`;
const Needle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 65px;
  width: 3px;
  transform-origin: bottom center;
  transform: translate(-50%, -100%) rotate(0deg);
`;

const HourNeedle = styled(Needle)`
  transition: all 0.5s ease-in;
  ${({ isLight, hour }) => {
    return `background-color:${
      isLight ? "#000" : "white"
    }; transform: translate(-50%, -100%) rotate(${hour}deg);`;
  }}
`;
const MinutesNeedle = styled(Needle)`
  transition: all 0.5s ease-in;
  height: 100px;
  ${({ isLight, minutes }) => {
    return `background-color:${
      isLight ? "#000" : "white"
    }; transform: translate(-50%, -100%) rotate(${minutes}deg);`;
  }}
`;
const SecondNeedle = styled(Needle)`
  height: 100px;
  background-color: red;
  ${({ isLight, seconds }) => {
    return `transform: translate(-50%, -100%) rotate(${seconds}deg);`;
  }}
`;
const CenterDot = styled.div`
  background-color: #e74c3c;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  transition: all 0.5s ease-in;
  &::after {
    content: "";
    background-color: ${({ isLight }) => (isLight ? "#000" : "white")};
    width: 5px;
    height: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`;
const StyledTime = styled.div`
  transition: all 0.5s ease-in;
  font-size: 60px;
  color: ${({ isLight }) => (isLight ? "#000" : "white")};
`;

const Circle = styled.div`
  transition: all 0.5s ease-in;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ isLight }) => (isLight ? "#000" : "white")};
  font-size: 12px;
  color: ${({ isLight }) => (isLight ? "white" : "#000")};
`;
const Loading = styled.div`
  transition: all 0.5s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 700;
  color: ${({ isLight }) => (isLight ? "#000" : "white")};
`;
export {
  StyledTime,
  CenterDot,
  SecondNeedle,
  MinutesNeedle,
  ThemedButton,
  HourNeedle,
  ThemedWrapper,
  Circle,
  Loading,
};
