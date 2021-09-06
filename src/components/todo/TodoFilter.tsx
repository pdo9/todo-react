import React from 'react';
import CustomButton from '../UI/button/CustomButton';
import TodoStore from '../stores/TodoStore';
// import { observer } from 'mobx-react-lite';
import { SORT_KEYS } from '../utils/constants';

const TodoFilter = () => {
  const [serachValue, setSearchValue] = React.useState('');
  const [sortValue, setsortValue] = React.useState('');

  React.useEffect(() => {
    TodoStore.searchValue = serachValue;
    TodoStore.sortValue = sortValue;

    TodoStore.getTodoList();
  }, [serachValue, sortValue]);

  const searchHandler = (event: any): void => {
    event.preventDefault();
    setSearchValue(event.target.value);
    console.log('searchHandler');
    // TodoStore.filterValue = filterValue;
    // TodoStore.getTodoList();
  };

  const sortHandler = (event: any): void => {
    setsortValue(event.target.value);
    console.log('sortHandler');
  };

  const resetFiltres = () => {
    console.log('reset filters');
    setSearchValue('');
    setsortValue('');
  };

  return (
    <div>
      <fieldset style={{ marginTop: '15px', border: '1px solid dodgerblue' }}>
        <legend>Фильтр</legend>
        <input
          className='todo-input'
          placeholder='Введите текст для поиска'
          value={serachValue}
          onChange={(event) => searchHandler(event)}
        />
        <p>
          <select
            className='todo-input'
            value={sortValue}
            onChange={sortHandler}
          >
            <option disabled>Сортировка</option>

            <option value={SORT_KEYS.DATE_ASC}>
              По дате добавления (сначала старые)
            </option>

            <option value={SORT_KEYS.DATE_DESC}>
              По дате добавления (сначала новые)
            </option>

            <option value={SORT_KEYS.LOCALECOMPARE_ASC}>
              По содержанию (в алфавитном порядке)
            </option>

            <option value={SORT_KEYS.LOCALECOMPARE_DESC}>
              По содержанию (в обратном алфавитном порядке)
            </option>

            <option value={SORT_KEYS.IS_COMPLETED_ASC}>
              По статусу (сначала выполненные)
            </option>

            <option value={SORT_KEYS.IS_COMPLETED_DESC}>
              По статусу (сначала невыполненные)
            </option>
          </select>
        </p>
        <CustomButton style={{ marginTop: '15px' }} onClick={resetFiltres}>
          По умолчанию
        </CustomButton>
      </fieldset>
    </div>
  );
};

// export default observer(TodoFilter);
export default TodoFilter;
