import Select from '../select';

import style from './start.module.css';

const Start = () => {
  return (
    <div className="container">
      <div className={style.start}>
        <Select sel_category />
        <Select sel_difficulty />
        Start
      </div>
    </div>
  );
}

export default Start;