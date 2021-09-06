import React from 'react';
import CustomButton from '../UI/button/CustomButton';
import TodoStore from '../stores/TodoStore';
import { observer } from 'mobx-react-lite';
import { SORT_KEYS } from '../utils/constants';

const TodoFilter = () => {
  React.useEffect(() => {
    TodoStore.getTodoList();
  }, [TodoStore.searchValue, TodoStore.sortValue]); // eslint-disable-line

  const searchHandler = (event: any): void => {
    //event.preventDefault();
    TodoStore.searchValue = event.target.value;
    console.log('searchHandler', TodoStore.searchValue);
  };

  const sortHandler = (event: any): void => {
    TodoStore.sortValue = event.target.value;
    console.log('sortHandler');
  };

  const resetFiltres = () => {
    console.log('reset filters');
    TodoStore.searchValue = '';
    TodoStore.sortValue = '';
  };

  return (
    <div>
      <fieldset style={{ marginTop: '15px', border: '1px solid dodgerblue' }}>
        <legend>Фильтр</legend>
        <input
          className='todo-input'
          placeholder='Введите текст для поиска'
          value={TodoStore.searchValue}
          onChange={(event) => searchHandler(event)}
        />
        <p>
          <select
            className='todo-input'
            value={TodoStore.sortValue}
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

export default observer(TodoFilter);
