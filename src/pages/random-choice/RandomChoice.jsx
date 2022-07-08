import { useState } from "react";
import styled from "styled-components";
const StyledWapper = styled.div`
  background-color: #2b88f0;
  font-family: "Muli", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
`;
const StyledContainer = styled.div`
  width: 500px;
  h3 {
    font-size: 18px;
    color: #fff;
    margin: 10px 0 20px;
    text-align: center;
  }
  textarea {
    border: none;
    display: block;
    width: 100%;
    height: 100px;
    font-family: inherit;
    padding: 10px;
    margin: 0 0 20px;
    font-size: 16px;
  }
`;

const StyledButton = styled.button`
  padding: 12px 18px;
  color: white;
  border-radius: 12px;
  background-color: orange;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

function RandomChoice(props) {
  const [inputString, setInputString] = useState([]);
  const handleOnChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      console.log();
      const arr = value.split(",");
      const filtered = arr.filter((el) => el !== "");
      setInputString(filtered);
    } else {
      setInputString([]);
    }
  };
  return (
    <StyledWapper>
      <StyledContainer>
        <h3>
          Enter all of the choices divided by a comma (','). Press enter when
          you're done
        </h3>
        <textarea
          name="input"
          placeholder="Enter choices"
          id="input"
          cols="30"
          rows="10"
          onChange={handleOnChange}
        ></textarea>
        {inputString.length !== 0 && (
          <div className="flex gap-3 flex-wrap">
            {inputString.map((el, index) => (
              <StyledButton>{el}</StyledButton>
            ))}
          </div>
        )}
      </StyledContainer>
    </StyledWapper>
  );
}

export default RandomChoice;
