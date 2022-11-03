import style from './button.module.css';

const Button = ({ name, numberOfQuestions, currentQuestion, setCurrentPage, setCurrentQuestion }) => {

  const onClick = () => {
    if (setCurrentPage && name === "Start") {
      return setCurrentPage(1);
    }

    if (currentQuestion >= (numberOfQuestions - 1)) {
      return setCurrentPage(2);
    }
    
    if (setCurrentQuestion && currentQuestion <= (numberOfQuestions - 1)) {
      return setCurrentQuestion(c => c + 1);
    }

    return;
  }

  return (
    <div 
      className={style.wrapp}
      style={name === 'Start' ? {padding: '50px 0 30px 0'} : null}
    >
      <button 
        onClick={() => onClick()}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;