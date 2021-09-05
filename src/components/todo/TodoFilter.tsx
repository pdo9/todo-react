import React from 'react';
import CustomButton from '../UI/button/CustomButton';
import TodoStore from '../stores/TodoStore';
import { observer } from 'mobx-react-lite';

const TodoFilter = () => {
  const [filterValue, setFilterValue] = React.useState('');
  const [sortValue, setsortValue] = React.useState('');

  React.useEffect(() => {
    TodoStore.filterValue = filterValue;
    TodoStore.sortValue = sortValue;

    TodoStore.getTodoList();
  }, [filterValue, sortValue]);

  const filterHandler = (event: any): void => {
    event.preventDefault();
    setFilterValue(event.target.value);
    // TodoStore.filterValue = filterValue;
    // TodoStore.getTodoList();
  };

  const sortHandler = (event: any): void => {
    setsortValue(event.target.value);
  };

  const resetFiltres = () => {
    console.log('reset filters');
    setFilterValue('');
    setsortValue('');
  };

  return (
    <div>
      <fieldset style={{ marginTop: '15px', border: '1px solid dodgerblue' }}>
        <legend>Фильтр</legend>
        <input
          className='todo-input'
          placeholder='Введите текст для поиска'
          value={filterValue}
          onChange={(event) => filterHandler(event)}
        />
        <p>
          <select
            className='todo-input'
            value={sortValue}
            // onChange={(event) => setsortValue(event.target.value)}
            onChange={sortHandler}
          >
            <option disabled>Сортировка</option>
            <option value={'ASC'}>По возрастанию</option>
            <option value={'DESC'}>По убыванию</option>
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
