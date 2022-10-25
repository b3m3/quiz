import brain from './img/brain.png';

import style from './header.module.css';

const Header = () => {
  return (
    <div className="container">
      <header className={style.header}>

        <h1>Quiz</h1>

        <div className={style.image}>
          <img 
            src={brain}
            alt="Quiz"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;