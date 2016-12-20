// @flow

import React from 'react';

export type TodoType = {
  completed: boolean,
  id: number,
  onClick: Function,
  text: string,
};

const Todo = ({ onClick, completed, text }: TodoType) => (
  <a
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
    tabIndex="0"
  >
    {text}
  </a>
);

export default Todo;
