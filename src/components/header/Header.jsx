import General from './img/general.png';
import Geography from './img/geography.png';
import Sport from './img/sport.png';
import Society from './img/society.png';

import style from './header.module.css';

const Header = ({ title }) => {

  return (
    <div className="container">
      <header className={style.header}>

        <h1>{title ? title.category : 'Quiz'}</h1>

        <div className={style.image}>
          <img 
            src={title ? `${title.category.split(' ')[0]}` : General}
            alt="Image"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;