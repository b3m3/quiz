import { useState, lazy, Suspense } from 'react';

import StartPage from '../startPage/StartPage';
import TotalPage from '../totalPage/TotalPage';
import Loading from '../../components/loading/Loading';

import { Context } from '../../context/context';

import './app.css';

const QuizPage = lazy(() => import('../quizPage/QuizPage'));

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedTags, setSelectedTags] = useState('');
  const [rangevalue, setRangeValue] = useState('1');
  const [correctAnswers, setCorrectAnswers] = useState(0);

  
  const pages = [StartPage, QuizPage, TotalPage];

  return (
    <Context.Provider value={{
      selectedCategories,
      selectedDifficulty,
      selectedTags,
      rangevalue,
      correctAnswers,
      setSelectedCategories,
      setSelectedDifficulty,
      setSelectedTags,
      setRangeValue,
      setCorrectAnswers
    }}>
      <div className="app">
        {pages.map((Page, index) => (
          <div className='app-wrapp' key={index}>
            {currentPage === index && 
              <Suspense fallback={<Loading />}>
                <Page setCurrentPage={setCurrentPage}/>
              </Suspense>
            } 
          </div>
        ))}
      </div>
    </Context.Provider>
  );
}

export default App;