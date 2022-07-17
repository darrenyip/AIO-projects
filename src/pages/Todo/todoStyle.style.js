import styled from "styled-components";

const StyledCheckBox = styled.div `
  cursor: pointer;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #ea5959;
  margin-right: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isFinished }) => {
    if (isFinished) {
      return ` & ::after {
    content: "🦄";
}
`;
    }
  }}
`;

const StyledTaskText = styled.div `
  font-size: 18px;
  color: #5a5a5a;
  margin-right: 18px;
  text-decoration: ${({ isFinished }) =>
    isFinished ? "line-through" : "none"};
`;

const StyledCateTitle = styled.div `
  font-size: 22px;
  color: ${({ active }) => (active ? "#EA5959" : "#525252")};
`;
export { StyledTaskText, StyledCheckBox, StyledCateTitle };