import { useState } from 'react';

import { SlArrowDown } from 'react-icons/sl';

import style from './select.module.css';

const Select = ({ 
  arrData, 
  label, 
  selectedCategories, 
  setSelectedCategories,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedTags,
  setSelectedTags
}) => {
  const [open, setOpen] = useState(false);

  const onSelectItems = (event, state) => {
    if (event.target.checked) {
      state(arr => [...arr, event.target.nextSibling.textContent]);
    } else {
      state(arr => arr.filter(el => event.target.nextSibling.textContent !== el));
    }
  };

  const onSelectDifficulty = event => {
    setSelectedDifficulty(event.target.textContent);
    setOpen(false);
  };

  return (
    <div className={style.select} >
      <div
        className={style.top}
        onClick={() => setOpen(open => !open)}
      >
        <p>
          {selectedCategories && selectedCategories.length 
            ? selectedCategories.join(', ').length >= 45 
              ? selectedCategories.join(', ').slice(0, 45) + '...' 
              : selectedCategories.join(', ')
            : selectedDifficulty && selectedDifficulty.length
              ? selectedDifficulty
            : selectedTags && selectedTags.length
              ? selectedTags.join(', ').length >= 45 
                ? selectedTags.join(', ').slice(0, 45) + '...'
                : selectedTags.join(', ')
            : 'Random'}
        </p>
        <span style={open ? {transform: 'rotate(180deg)'} : null}>
          <SlArrowDown />
        </span>
        <i>{label}</i>
      </div>

      <ul className={`${open && style.open}`} >
        {arrData && arrData.map(el => (
          <li 
            key={label === 'Categories' ? el[0].split(' ')[0] : el}
          >
            {
              label === 'Categories'
                ? <>
                    <input 
                      type="checkbox"
                      id={el[0].split(' ')[0]}
                      onClick={e => onSelectItems(e, setSelectedCategories)}
                    />
                    <label htmlFor={el[0].split(' ')[0]}>
                      {el[0]}
                    </label>
                  </>
                : label === 'Tags'
                ? <>
                    <input 
                      type="checkbox"
                      id={'tag' + el}
                      onClick={e => onSelectItems(e, setSelectedTags)}
                    />
                    <label htmlFor={'tag' + el}>
                      {el}
                    </label>
                  </>
                : <span onClick={e => onSelectDifficulty(e)}>{el}</span>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Select;