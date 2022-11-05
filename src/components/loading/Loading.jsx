import spinner from './img/loading.svg';

import style from './loading.module.css';

const Loading = () => {
  return (
    <div className={style.loading}>
      <img src={spinner} alt="Loading" />
    </div>
  );
}

export default Loading;