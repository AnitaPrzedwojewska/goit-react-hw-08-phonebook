import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';

import { nanoid } from 'nanoid';
import { setFilter } from '../../redux/filtersSlice';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();

  const searchInputId = nanoid();

  return (
    <>
      <p>Find contacts by name:</p>
      <input
        className={css.filterInput}
        type='input'
        name='filter'
        value={useSelector(getFilter)}
        id={searchInputId}
        placeholder='enter part of the name'
        onChange={()=> dispatch(setFilter(event.target.value))}></input>
    </>
  );
};

export default Filter;