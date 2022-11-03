import { useEffect } from 'react';
import { useState } from 'react';
import style from './quiz.module.css';

import Button from '../button/Button';

const Quiz = ({ arrData, numberOfQuestions, currentQuestion, setCurrentPage, setCurrentQuestion }) => {
  const [correct, setCorrect] = useState(null);
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    if (arrData) {
      setAnswers([arrData.correctAnswer, ...arrData.incorrectAnswers]);
      setCorrect(arrData.correctAnswer);
    }
  }, [arrData]);

  return (
    <div className={style.quiz}>
      {arrData &&
        <>
          <span>Level {arrData.difficulty}</span>
          <h3>{arrData.question}</h3>
          
          <ul>
            {answers && answers.map((answer, i) => (
              <li key={i}>
                <Button 
                  name={answer}
                  currentQuestion={currentQuestion}
                  numberOfQuestions={numberOfQuestions}
                  setCurrentQuestion={setCurrentQuestion}
                  setCurrentPage={setCurrentPage}
                />
              </li>
            ))}
          </ul>
        </>
      }
    </div>
  );
}

export default Quiz;