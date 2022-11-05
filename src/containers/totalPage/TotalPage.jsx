import { useContext } from 'react';

import Header from '../../components/header/Header';
import Counter from '../../components/counter/Counter';
import Button from '../../components/button/Button';

import { Context } from '../../context/context';

import style from './total.module.css';

const TotalPage = ({ setCurrentPage }) => {
  const {correctAnswers, rangevalue} = useContext(Context);

  return (
    <div className="container">
      <div className={style.total}>
        <Header total />
        <Counter 
          big
          guessedQuestions={correctAnswers - 1}
          totalQuestions={rangevalue}
        />
        <Button 
          name={'Start over'}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default TotalPage;