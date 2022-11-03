import { useState, useEffect } from 'react';

import Header from '../../components/header/Header';
import Select from '../../components/select/Select';
import RangeLimit from '../../components/rangeLimit';
import Button from '../../components/button';

import { CATEGORIES_URL, TAGS_URL } from '../../constans/api';
import { getApiResource } from '../../service/getApiResource';

import style from './start.module.css';

const StartPage = ({ setCurrentPage }) => {
  const [categories, setCategories] = useState(null);
  const [tags, setTags] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedTags, setSelectedTags] = useState('');
  const [rangevalue, setRangeValue] = useState('');

  const difficultyLvls = ['Random', 'Easy', 'Medium', 'Hard'];

  useEffect(() => {
    (async() => {
      const categoriesResults = await getApiResource(CATEGORIES_URL);
      const tagResults = await getApiResource(TAGS_URL);
      const arr = Object.entries(categoriesResults);
  
      if (categoriesResults) {
        setCategories(arr);
      }

      if (tagResults) {
        setTags(tagResults);
      }
    })()
  }, []);

  return (
    <div className="container">
      <div className={style.start}>
        <Header />
        <Select 
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          arrData={categories}
          label={'Categories'}
        />
        <Select  
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          arrData={difficultyLvls}
          label={'Difficulty'}
        />
        <Select  
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          arrData={tags}
          label={'Tags'}
        />
        <RangeLimit 
          rangevalue={rangevalue}
          setRangeValue={setRangeValue}
        />
        <Button
          name={'Start'}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default StartPage;