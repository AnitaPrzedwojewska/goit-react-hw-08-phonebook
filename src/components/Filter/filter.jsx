import { useDispatch, useSelector } from "react-redux";

import noIcon from "../../assets/no-icon.svg";
import searchIcon from "../../assets/search-icon.svg";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import css from "./Filter.module.css";

import { nanoid } from "nanoid";
import { getFilter, getStatusApp } from "../../redux/selectors";
import { setFilter } from "../../redux/filtersSlice";
import { setSearching } from "../../redux/statusAppSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const { searching } = useSelector(getStatusApp);

  const handleOffSearching = () => {
    dispatch(setSearching(false));
    dispatch(setFilter(''));
  };

  const handleOnSearching = () => {
    dispatch(setSearching(true));
  };

  const searchInputId = nanoid();

  return (
    <div className={css.filter}>
      {!searching && (
        <Button onClick={handleOnSearching}>
          <Icon src={searchIcon} size='24' />
        </Button>
      )}
      {searching && (
        <>
          <input
            className={css.input}
            type='input'
            name='filter'
            value={filter}
            id={searchInputId}
            placeholder='enter part of the name'
            onChange={() => dispatch(setFilter(event.target.value))}
          />
          <Button onClick={handleOffSearching}>
            <Icon src={noIcon} size='24' />
          </Button>
        </>
      )}
    </div>
  );
};

export default Filter;
