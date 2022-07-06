import { useState } from "react";
import {
  Circle,
  Progress,
  ProgressContainer,
  ProgressWpr,
  StyledButton,
} from "./progressStyle";
function ProgressSteps(props) {
  const [step, setStep] = useState(1);
  const data = [
    {
      id: 1,
      title: "1",
    },
    {
      id: 2,
      title: "2",
    },
    {
      id: 3,
      title: "3",
    },
    {
      id: 4,
      title: "4",
    },
  ];
  const handleSubmit = () => {
    alert("submited");
    setStep(1);
  };

  return (
    <ProgressWpr>
      <div className="flex justify-center items-center">
        <div className="text-center">
          <ProgressContainer>
            <Progress
              className="progress"
              id="progress"
              style={{ width: ((step - 1) / 3) * 100 + "%" }}
            ></Progress>
            {data.map((el, index) => (
              <div key={index} style={{ zIndex: 2 }}>
                <Circle isActive={step >= el.id}>{el.title}</Circle>
              </div>
            ))}
          </ProgressContainer>

          <StyledButton
            className="btn"
            id="prev"
            disabled={step == 1}
            onClick={() => setStep((step) => step - 1)}
          >
            Prev
          </StyledButton>
          {step < 4 && (
            <StyledButton
              className="btn"
              id="next"
              onClick={() => setStep((step) => step + 1)}
            >
              Next
            </StyledButton>
          )}
          {step === 4 && (
            <StyledButton className="btn" id="next" onClick={handleSubmit}>
              Submit
            </StyledButton>
          )}
        </div>
      </div>
    </ProgressWpr>
  );
}

export default ProgressSteps;
