import styled from "styled-components";

const StyledButton = styled.button `
  background-color: #3498db;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;

  &:active {
    transform: scale(0.98);
  }
  &:focus {
    outline: 0;
  }
  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;
const ProgressWpr = styled.div `
  background-color: #f6f7fb;
  font-family: "Muli", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`;

const ProgressContainer = styled.div `
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
  &::after {
    content: "";
    background-color: #e0e0e0;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: 0;
  }
`;

const Progress = styled.div `
  background-color: #3498db;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0%;
  z-index: 1;
  transition: 0.4s ease;
`;
const Circle = styled.div `
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #e0e0e0;
  transition: 0.4s ease;
  border-color: ${(props) => (props.isActive ? "#3498db" : "#e0e0e0")};
`;

export { Circle, Progress, ProgressContainer, ProgressWpr, StyledButton };