import styled, { keyframes } from "styled-components";
const SpinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const SpinningContainer = styled.div``;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`;
function Loading(props) {
  return (
    <SpinningContainer>
      <LoadingSpinner>Loading</LoadingSpinner>
    </SpinningContainer>
  );
}

export default Loading;
