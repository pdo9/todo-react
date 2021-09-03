import React, { Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import TodoList from '../todo/TodoList';
import TodoFormInput from '../todo/TodoFormInput';

/**
 * "Главная" страница с основным содержимым
 */
const Home: React.FC = () => {
  return (
    <Fragment>
      <TodoFormInput />
      <TodoList />
    </Fragment>
  );
};

export default observer(Home);
