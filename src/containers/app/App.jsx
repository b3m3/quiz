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
  const [rangevalue, setRangeValue] = useState('');

  return (
    <Context.Provider value={{
      selectedCategories,
      selectedDifficulty,
      selectedTags,
      rangevalue,
      setSelectedCategories,
      setSelectedDifficulty,
      setSelectedTags,
      setRangeValue
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