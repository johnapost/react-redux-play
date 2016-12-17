// @flow

import React from 'react';
import Todo from './Todo';
import type { TodoListType } from '../types';

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
