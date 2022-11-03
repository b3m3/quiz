import { useState, useEffect } from 'react';

import Header from '../../components/header/Header';
import Quiz from '../../components/quiz/Quiz';

import { getApiResource } from '../../service/getApiResource';
import { DEFAULT_URL } from '../../constans/api';

import style from './quiz-page.module.css';

const QuizPage = ({ setCurrentPage }) => {
  const [resultsQuestions, setResultsQuestions] = useState(null);
  const [categories, setCategories] = useState(null);
  const [numberOfQuestions, setNumberOfQuestions] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    (async() => {
      const res = await getApiResource(DEFAULT_URL);

      const {
        category, correctAnswer, difficulty, id, incorrectAnswers, question
      } = res[currentQuestion];

      if (res) {
        setResultsQuestions({ question, correctAnswer, incorrectAnswers, difficulty, id });
        setCategories({ category });
        setNumberOfQuestions(res.length);
      }
    })()
  }, [currentQuestion]);

  return (
    <div className="container">
      <div className={style.quiz}>
        <Header 
          title={categories}
        />
        <Quiz 
          arrData={resultsQuestions}
          currentQuestion={currentQuestion}
          numberOfQuestions={numberOfQuestions}
          setCurrentQuestion={setCurrentQuestion}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default QuizPage;