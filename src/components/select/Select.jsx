import { useState, useEffect } from 'react';

import { CATEGORIES_URL } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';

import { SlArrowDown } from 'react-icons/sl';

import style from './select.module.css';

const Select = ({ sel_category, sel_difficulty }) => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [difficulty, setDifficulty] = useState('');

  const difficultyLvls = ['random', 'easy', 'medium', 'hard'];
  
  useEffect(() => {
      (async() => {
        const res = await getApiResource(CATEGORIES_URL);
        const arr = Object.entries(res);
    
        if (res) {
          setCategories(arr);
        }
      })()
  }, []);

  return (
    <div className={style.select} >
      <div
        className={style.top}
        onClick={() => setOpen(open => !open)}
      >
        <p>
          {
            sel_category
              ? selectedCategories && selectedCategories.length 
                ? 'Custom'
                : 'All Categories'
              : sel_difficulty
              ? difficulty.length ? difficulty : 'Random'
              : null
          }
        </p>
        <span style={open ? {transform: 'rotate(180deg)'} : null}>
          <SlArrowDown />
        </span>
        <i>
          {sel_category
            ? 'Categories'
            : sel_difficulty
            ? 'Difficulty'
            : null}
        </i>
      </div>

      <ul 
        className={`${open && style.open}`}
        style={sel_difficulty ? {zIndex: '1'} : {zIndex: '2'}}
      >
        {sel_category 
          ? categories && categories.map(el => (
              <li key={el[0]}>
                <input 
                  type="checkbox" 
                  id={el[0].split(' ')[0]}
                  onClick={e => e.target.checked 
                    ? setSelectedCategories(arr => [...arr, e.target.nextElementSibling.textContent])
                    : setSelectedCategories(arr => arr.filter(el => e.target.nextElementSibling.textContent !== el))}
                />
                <label htmlFor={el[0].split(' ')[0]}>{el[0]}</label>
              </li>
            ))
          : sel_difficulty
            ? difficultyLvls.map(lvl => (
              <li 
                key={lvl}
                onClick={e => {
                  setDifficulty(e.target.textContent)
                  setOpen(false)
                }}
              >
                {lvl[0].toUpperCase() + lvl.slice(1)}
              </li>
            ))
          : null
        }
      </ul>
    </div>
  );
}

export default Select;