import Header from '../../components/header/Header';
import Counter from '../../components/counter/Counter';

import style from './total.module.css';

const TotalPage = () => {
  return (
    <div className={style.total}>
      <Header 
        total
      />

      <Counter
        big
      />
    </div>
  );
}

export default TotalPage;