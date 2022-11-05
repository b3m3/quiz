import { useState } from 'react';

import StartPage from '../startPage/StartPage';
import QuizPage from '../quizPage/QuizPage';
import TotalPage from '../totalPage/TotalPage';

import { Context } from '../../context/context';

import './app.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [StartPage, QuizPage, TotalPage];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedTags, setSelectedTags] = useState('');
  const [rangevalue, setRangeValue] = useState('1');

  const [correctAnswers, setCorrectAnswers] = useState(0);

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
            {currentPage === index && <Page setCurrentPage={setCurrentPage}/>} 
          </div>
        ))}
      </div>
    </Context.Provider>
  );
}

export default App;