import { useState, useEffect, useContext, lazy, Suspense } from 'react';

import Header from '../../components/header/Header';
import Counter from '../../components/counter/Counter';
import Loading from '../../components/loading/Loading';

import { getApiResource } from '../../service/getApiResource';
import { ROOT_QUIZ, QUESTIONS, LIMIT, DIFFICULTY, TAGS, CATEGORIES } from '../../constans/api';
import { Context } from '../../context/context';
import { stringToLink, removeSymbolInLink } from '../../utils/functions';

import style from './quiz-page.module.css';

const Quiz = lazy(() => import('../../components/quiz/Quiz'));

const QuizPage = ({ setCurrentPage }) => {
  const [errorApi, setErrorApi] = useState(false); 
  const [resultsQuestions, setResultsQuestions] = useState(null);
  const [categories, setCategories] = useState(null);
  const [numberOfQuestions, setNumberOfQuestions] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const {selectedCategories, selectedDifficulty, selectedTags, rangevalue, setRangeValue} = useContext(Context);
    
  useEffect(() => {
    const url = 
      ROOT_QUIZ+
      QUESTIONS+
      (rangevalue === '1' ? LIMIT+'10' : LIMIT+rangevalue)+
      (selectedCategories.length ? CATEGORIES+stringToLink(selectedCategories) : '')+
      (selectedDifficulty !== "Random" && selectedDifficulty.length ? DIFFICULTY+selectedDifficulty.toLowerCase() : '')+
      (selectedTags ? TAGS+stringToLink(selectedTags) : '');

    (async() => {
      const res = await getApiResource(removeSymbolInLink(url));

      if (res.length) {
        const {category, correctAnswer, difficulty, id, incorrectAnswers, question} = res[currentQuestion];

        setResultsQuestions({ question, correctAnswer, incorrectAnswers, difficulty, id });
        setCategories({ category });
        setNumberOfQuestions(res.length);
        setRangeValue(rangevalue === '1' ? '10' : rangevalue);
      } else {
        setErrorApi(true);
      }
    })()
  }, [currentQuestion, selectedCategories, selectedDifficulty, selectedTags, rangevalue, setRangeValue]);

  return (
    <div className="container">
      <div className={style.quiz}>
        <Header 
          title={categories}
        />
        <Counter
          guessedQuestions={currentQuestion}
          totalQuestions={numberOfQuestions}
        />
        {errorApi
          ? <h2 
              style={{textAlign: 'center', padding: '20px 0'}}
            >
              Please reload the page or change categories
            </h2>
          : <Suspense fallback={<Loading />}>
              <Quiz 
                arrData={resultsQuestions}
                currentQuestion={currentQuestion}
                numberOfQuestions={numberOfQuestions}
                setCurrentQuestion={setCurrentQuestion}
                setCurrentPage={setCurrentPage}
              />
            </Suspense>}
      </div>
    </div>
  );
}

export default QuizPage;