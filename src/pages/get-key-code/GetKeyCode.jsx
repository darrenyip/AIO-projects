import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #e1e1e1;
  font-family: "Muli", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`;

const StyledEmpty = styled.div`
  border: 1px solid #999;
  background-color: #eee;
  box-shadow: 1px 1px 3px rgb(0 0 0 / 10%);
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  flex-direction: column;
  margin: 10px;
  min-width: 150px;
  position: relative;
  small {
    position: absolute;
    top: -24px;
    left: 0;
    text-align: center;
    width: 100%;
    color: #555;
    font-size: 14px;
  }
`;
function GetKeyCode(props) {
  const [keyCode, setKeyCode] = useState(null);
  const saveEvent = (event) => {
    setKeyCode(event);
  };
  useEffect(() => {
    window.addEventListener("keypress", saveEvent);
    return () => {
      window.removeEventListener("keypress", saveEvent);
    };
  }, []);

  return (
    <StyledContainer>
      {!keyCode && <StyledEmpty>Press any key to get the keyCode</StyledEmpty>}
      {keyCode && (
        <>
          <StyledEmpty>
            {keyCode.key} <small>keyCode.key</small>
          </StyledEmpty>
          <StyledEmpty>
            {keyCode.keyCode} <small>keyCode.keyCode</small>
          </StyledEmpty>
          <StyledEmpty>
            {keyCode.code} <small>keyCode.code</small>
          </StyledEmpty>
        </>
      )}
    </StyledContainer>
  );
}

export default GetKeyCode;
