import styled from "styled-components";

const RotatingWpr = styled.div `
  font-family: "Lato", sans-serif;
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  margin: 0;
`;

const StyledContainer = styled.div `
  z-index: 0;
  transform-origin: top left;
  transition: transform 0.5s linear;
  transform: ${({ isRotated }) => (isRotated ? "rotate(-20deg)" : undefined)};
`;
const StyledNav = styled.nav `
  position: fixed;
  bottom: 0;
  left: 0;
  .li {
    transform: ${({ isRotated }) => (isRotated ? "translateX(0)" : undefined)};
    transition-delay: ${({ isRotated }) => (isRotated ? "0.3s" : undefined)};
  }
  & ul {
    cursor: pointer;
    list-style-type: none;
    padding-left: 30px;
  }
  & ul li {
    text-transform: uppercase;
    color: #fff;
    margin: 40px 0;
    transform: translateX(-100%);
    transition: transform 0.4s ease-in;
  }

  & ul li + li {
    margin-left: 15px;
    transform: translateX(-150%);
  }
  & ul li + li + li {
    margin-left: 30px;
    transform: translateX(-200%);
  }
`;

export { RotatingWpr, StyledContainer, StyledNav };