import styled from "styled-components";

const StyledContainer = styled.div `
  background-color: #686de0;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledCard = styled.div `
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  padding: 48px;
  text-align: center;
  & .title {
    font-size: 1.17em;
    color: #909090;
    font-weight: 700;
    margin-bottom: 24px;
  }
  & .text {
    text-align: center;
    color: #000;
    font-size: 30px;
    margin-bottom: 48px;
  }
`;

const StyledButton = styled.button `
  border-radius: 8px;
  padding: 14px 40px;
  color: white;
  font-size: 16px;
  background-color: #9f68e0;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export { StyledButton, StyledCard, StyledContainer };