import style from './button.module.css';

const Button = ({ name }) => {
  return (
    <div className={style.wrapp}>
      <button>
        {name}
      </button>
    </div>
  );
}

export default Button;