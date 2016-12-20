// @flow

import React from 'react';
import Todo from '../Todo/Todo';
import type { TodoListProps } from './TodoListProps';

const TodoList = ({ todos, onTodoClick }: TodoListProps) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        onClick={() => onTodoClick(todo.id)}
        {...todo}
      />,
    )}
  </ul>
);

export default TodoList;
