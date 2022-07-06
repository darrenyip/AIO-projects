import styled from "styled-components";

const Container = styled.div `
  margin: 0 auto;
  display: flex;
  width: 90vw;

  & h3 {
    font-size: 40px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
  }
`;

const Panel = styled.div `
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  transition: all 0.7s ease-in;
  flex: ${(props) => (props.isActive ? "5" : "0.5")};

  & h3 {
    transition: opacity 0.3s ease-in 0.4s;
    opacity: ${(props) => (props.isActive ? "1" : "0")};
  }
`;

export { Panel, Container };