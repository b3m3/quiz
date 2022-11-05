import { useContext } from 'react';

import { Context } from '../../context/context';

import style from './button.module.css';

const Button = ({ name, numberOfQuestions, currentQuestion, correct, setCurrentPage, setCurrentQuestion }) => {
  const {setCorrectAnswers} = useContext(Context);

  const onClick = (e) => {
    if (setCurrentPage && name === "Start") {
      setCurrentPage(1);
    }

    if (setCurrentPage && name === "Start over") {
      window.location.reload();
    }

    if ((currentQuestion-1) >= (numberOfQuestions-2)) {
      setCurrentPage(2);
    }
    
    if (setCurrentQuestion && currentQuestion <= numberOfQuestions) {
      setCurrentQuestion(c => c + 1);
    }

    if (name && name === correct) {
      setCorrectAnswers(corr => corr + 1);
    }

    return;
  }

  return (
    <div 
      className={style.wrapp}
      style={name === 'Start' || name === 'Start over' ? {padding: '50px 0 30px 0'} : null}
    >
      <button 
        onClick={e => onClick(e)}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;