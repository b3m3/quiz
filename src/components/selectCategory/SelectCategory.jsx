import { useState, useEffect } from 'react';

import { CATEGORIES_URL } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';

import { SlArrowDown } from 'react-icons/sl';

import style from './select-category.module.css';

const SelectCategory = ({  }) => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const getResults = async url => {
    const res = await getApiResource(url);
    const arr = Object.entries(res);

    if (res) {
      setCategories(arr);
    }
  }
  
  useEffect(() => {
    getResults(CATEGORIES_URL);
  }, []);

  return (
    <div className={style.select} >
      <div
        className={style.top}
        onClick={() => setOpen(open => !open)}
      >
        <p>
          {selectedCategories && selectedCategories.length 
            ? 'Custom'
            : 'All Categories'}
        </p>
        <span style={open ? {transform: 'rotate(180deg)'} : null}>
          <SlArrowDown />
        </span>
        <i>Categories</i>
      </div>

      <ul
        className={`${open && style.open}`}
      >
        {categories && categories.map((el, i) => (
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
        ))}
      </ul>
    </div>
  );
}



export default SelectCategory;