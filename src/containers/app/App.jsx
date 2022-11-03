import { useState } from 'react';

import StartPage from '../startPage/StartPage';
import QuizPage from '../quizPage/QuizPage';
import TotalPage from '../totalPage/TotalPage';

import './app.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [StartPage, QuizPage, TotalPage];

  return (
    <div className="app">
      {pages.map((Page, index) => (
        <div className='app-wrapp' key={index}>
          {currentPage === index && <Page setCurrentPage={setCurrentPage}/>} 
        </div>
      ))}
    </div>
  );
}

export default App;