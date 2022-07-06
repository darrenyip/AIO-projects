import styled from "styled-components";

const StyledContainer = styled.div `
  position: relative;
  height: 100vh;
`;
const Background = styled.div `
  background: url(https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80)
    no-repeat center center/cover;
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  z-index: -1;
`;

const LoadingContainer = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: 700;
  font-size: 50px;
`;

export { StyledContainer, Background, LoadingContainer };