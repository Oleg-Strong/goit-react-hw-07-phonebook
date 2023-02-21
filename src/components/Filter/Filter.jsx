import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlise';

const Filter = () => {
  const dispatch = useDispatch();
  const name = useSelector(getFilter);
  const onchange = event => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };
  return (
    <div className={css.filterBox}>
      <label className={css.filterLabel}>
        <span className={css.filterLabelText}>Find contacts by name</span>

        <input
          className={css.filterInput}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onchange}
        />
      </label>
    </div>
  );
};

export default Filter;
