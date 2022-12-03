import { useState, useRef } from 'react';

import { SlArrowDown } from 'react-icons/sl';
import { VscClose } from 'react-icons/vsc';

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

  const refCat = useRef([]);
  const refTag = useRef([]);

  const onSelectItems = (event, state) => {
    if (event.target.checked) {
      state(arr => [...arr, event.target.nextSibling.textContent]);
    } else {
      state(arr => arr && arr.filter(el => event.target.nextSibling.textContent !== el));
    }
  };

  const onSelectDifficulty = event => {
    setSelectedDifficulty(event.target.textContent);
    setOpen(false);
  };

  const onClearInput = () => {
    const clear = el => {
      if (el) {
        el.current.map(r => {
          return r.checked = false
        })
      }
    }

    clear(refCat);
    clear(refTag);

    return label === 'Categories' 
      ? setSelectedCategories([]) 
      : label === 'Difficulty'
      ? setSelectedDifficulty('')
      : label === 'Tags'
      ? setSelectedTags('')
      : null
  }

  return (
    <div className={style.select} >
      <div
        className={style.top}
      >
        <p
          onClick={() => setOpen(open => !open)}
        >
          {selectedCategories && selectedCategories.length 
            ? selectedCategories.join(', ')
            : selectedDifficulty && selectedDifficulty.length
              ? selectedDifficulty
            : selectedTags && selectedTags.length
              ? selectedTags.join(', ')
            : 'Random'}
        </p>

        <SlArrowDown 
          className={style.arrow}
          style={open ? {transform: 'translateY(-50%) rotate(180deg)'} : null}
          onClick={() => setOpen(open => !open)}
        />

        {selectedCategories && selectedCategories.length 
          ? <VscClose
              className={style.close}
              onClick={() => onClearInput()}
            />
          : selectedDifficulty && selectedDifficulty.length
            ? <VscClose
                className={style.close}
                onClick={() => onClearInput()}
              />
          : selectedTags && selectedTags.length
            ? <VscClose
                className={style.close}
                onClick={() => onClearInput()}
              />
          : null}

        <i>{label}</i>
      </div>

      <ul className={`${open && style.open}`} >
        {arrData && arrData.map((el, i) => (
          <li 
            key={label === 'Categories' ? el[0].split(' ')[0] : el}
          >
            {
              label === 'Categories'
                ? <>
                    <input
                      ref={el => refCat.current[i] = el}
                      id={el[0].split(' ')[0]}
                      type="checkbox"
                      onChange={e => onSelectItems(e, setSelectedCategories)}
                    />
                    <label htmlFor={el[0].split(' ')[0]}>
                      {el[0]}
                    </label>
                  </>
                : label === 'Tags'
                ? <>
                    <input
                      ref={el => refTag.current[i] = el}
                      id={'tag' + el}
                      type="checkbox"
                      onChange={e => onSelectItems(e, setSelectedTags)}
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