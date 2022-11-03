import Header from '../../components/header/Header';
import Counter from '../../components/counter/Counter';
import Button from '../../components/button/Button';

import style from './total.module.css';

const TotalPage = () => {
  return (
    <div className="container">
      <div className={style.total}>
        <Header total/>
        <Counter big />
        <Button name={'Start over'} />
      </div>
    </div>
  );
}

export default TotalPage;