import { useEffect, useState } from 'react';

import Button from '../button/Button';

import { shuffle } from '../../utils/functions';

import style from './quiz.module.css';


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
            {answers && shuffle(answers).map((answer, i) => (
              <li key={i}>
                <Button 
                  name={answer}
                  currentQuestion={currentQuestion}
                  numberOfQuestions={numberOfQuestions}
                  setCurrentQuestion={setCurrentQuestion}
                  setCurrentPage={setCurrentPage}
                  correct={correct}
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