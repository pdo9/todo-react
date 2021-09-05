import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import TodoList from '../todo/TodoList';
import TodoFormInput from '../todo/TodoFormInput';
import TodoFilter from '../todo/TodoFilter';

/**
 * "Главная" страница с основным содержимым
 */
const Home: React.FC = () => {
  return (
    <Fragment>
      <TodoFormInput />
      <TodoFilter />
      <TodoList />
    </Fragment>
  );
};

export default observer(Home);
