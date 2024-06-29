import React, { useState } from "react";
import style from "./form.module.css";
const steps = [
  ["name", "age"],
  ["city", "street", "number"],
  ["company", "grade"],
  ["email", "phone"],
];

function FormInputs() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reply, setReply] = useState(false);

  const numbers = steps.map((_, index) => index + 1);
  const showNextQuestion = () => {
    setStep(step + 1);
  };

  const showPrevQuestion = () => {
    setStep(step - 1);
  };

  const changeAnswers = (el, value) => {
    setAnswers({ ...answers, [el]: value });
  };

  const showAnswers = () => {
    setReply(true);
  };

  const restart = () => {
    setStep(0);
    setReply(!reply);
    setAnswers({});
  };

  const isFormCompleted = steps[step].every(
    (el) => answers[el] && answers[el].trim() !== ""
  );
  const newArr = Object.entries(answers);

  return (
    <div className={style.container}>
      {!reply ? (
        <div>
          <div className={style.container_idicator_questions}>
            {numbers.map((el) => (
              <p className={el - 1 <= step ? style.active : ""}>{el}</p>
            ))}
          </div>
          <div className={style.container_inputs}>
            {steps[step].map((el) => (
              <div className={style.container_input}>
                <label>{el}:</label>
                <input
                  type="text"
                  placeholder="Enter text..."
                  onChange={(e) => changeAnswers(el, e.target.value)}
                  value={answers[el] || ""}
                />
              </div>
            ))}
          </div>{" "}
          <div className={style.container_buttons}>
            {step !== 0 && <button onClick={showPrevQuestion}>Prev</button>}

            {step + 1 < steps.length ? (
              <button onClick={showNextQuestion} disabled={!isFormCompleted}>
                Next
              </button>
            ) : (
              <button onClick={showAnswers} disabled={!isFormCompleted}>
                Show Answers
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={style.container_result}>
          <h2>Your answers:</h2>
          <div className={style.container_result_answers}>
            {newArr.map((el) => (
              <div className={style.container_result_answer}>
                <p>{el[0]}:</p>
                <p>{el[1]}</p>
              </div>
            ))}
          </div>
          ;<button onClick={restart}>Начать снова</button>
        </div>
      )}
    </div>
  );
}

export default FormInputs;
