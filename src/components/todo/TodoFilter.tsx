import React from 'react';
import CustomButton from '../UI/button/CustomButton';
import TodoStore from '../stores/TodoStore';

const TodoFilter = () => {
  const [filterValue, setFilterValue] = React.useState('');

  React.useEffect(() => {
    TodoStore.filterValue = filterValue;
    TodoStore.getTodoList();
  }, [filterValue]);

  const filterHandler = (event: any): void => {
    event.preventDefault();
    setFilterValue(event.target.value);
    console.log('filterValue:', filterValue);
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
          <select className='todo-input'>
            <option disabled defaultValue={-1}>
              Сортировка
            </option>
            <option>По дате</option>
            <option>По содержанию</option>
          </select>
        </p>
        <CustomButton style={{ marginTop: '15px' }}>По умолчанию</CustomButton>
      </fieldset>
    </div>
  );
};

export default TodoFilter;
