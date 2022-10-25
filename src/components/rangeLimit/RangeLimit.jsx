import style from './range.module.css';

const RangeLimit = ({ rangevalue, setRangeValue }) => {
  return (
    <div className={style.wrapp}>
      <input
        type="range"
        min={0}
        max={20}
        step={1}
        value={rangevalue}
        onChange={e => setRangeValue(e.target.value)}
      />
      <i>
        Number of questions 
        <b>{rangevalue === '0' || rangevalue === '' ? ' default' : ' ' + rangevalue}</b>
      </i>
    </div>
  );
}

export default RangeLimit;