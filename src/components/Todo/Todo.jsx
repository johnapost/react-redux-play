// @flow

import React from 'react';
import type { TodoType } from './TodoType';

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
