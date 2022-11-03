import style from './counter.module.css';

const Counter = ({ big, guessedQuestions, totalQuestions }) => {
  return (
    <div className={style.counter}>
      <svg
        style={big 
          ? {width: "160px", height: "160px"}
          : {width: "50px", height: "50px"}}
      >
        <circle
          className={style.clf}
          style={big 
            ? {r: "65", cx: "-80", cy: "80", strokeWidth: "2"} 
            : {r: "20", cx: "-25", cy: "25", strokeWidth: "1"}}
        />
        <circle
          className={style.cll}
          style={big 
            ? {strokeDasharray: `${(guessedQuestions / totalQuestions) * 408}px 408px`,
              r: "65", cx: "-80", cy: "80", strokeWidth: "4"}
            : {strokeDasharray: `${(guessedQuestions / totalQuestions) * 125}px 125px`,
              r: "20", cx: "-25", cy: "25", strokeWidth: "2"}}
        />
      </svg>
      <div 
        className={style.questions}
        style={big 
          ? {fontSize: "34px"}
          : {fontSize: "14px"}}
      >
        <span>{guessedQuestions}</span>
        <span className={style.slash}>/</span>
        <span>{totalQuestions}</span>
      </div>
    </div>
  );
}

export default Counter;