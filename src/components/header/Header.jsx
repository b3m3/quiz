import Arts from './img/arts.png';
import Film from './img/film.png';
import Food from './img/food.png';
import General from './img/general.png';
import Geography from './img/geography.png';
import History from './img/history.png';
import Music from './img/music.png';
import Science from './img/science.png';
import Society from './img/society.png';
import Sport from './img/sport.png';

import style from './header.module.css';

const Header = ({ title, total }) => {
  const setImage = () => {
    const titleName = title ? title.category.split(' ')[0] : null;

    const srcImage = titleName === "Arts" ? Arts 
      : titleName === "Film" ? Film
      : titleName === "Food" ? Food
      : titleName === "General" ? General
      : titleName === "Geography" ? Geography
      : titleName === "History" ? History
      : titleName === "Music" ? Music
      : titleName === "Science" ? Science
      : titleName === "Society" ? Society
      : titleName === "Sport" ? Sport
      : null
    
    return srcImage;
  };

  return (
    <div className="container">
      <header className={style.header}>
        {total
          ? <h1>Total</h1>
          : <h1>{title ? title.category : 'Quiz'}</h1>}

        <div className={style.image}>
          <img 
            src={title ? setImage() : General}
            alt="Image"
          />
        </div>
      </header>
    </div>
  );
}

export default Header;