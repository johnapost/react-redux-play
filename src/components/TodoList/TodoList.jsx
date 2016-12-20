// @flow

import React from 'react';
import Todo from '../Todo/Todo';
import type { TodoListType } from './TodoListType';

const TodoList = ({ todos, onTodoClick }: TodoListType) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />,
    )}
  </ul>
);

export default TodoList;
