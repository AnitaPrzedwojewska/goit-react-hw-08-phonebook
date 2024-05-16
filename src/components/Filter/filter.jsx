import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './filter.module.css';
import { setFilter } from '../../redux/filtersSlice';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
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