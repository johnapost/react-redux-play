// @flow

import React from 'react';
import type { TodoProps } from './TodoProps';

const Todo = ({ onClick, completed, text }: TodoProps) => (
  <li>
    <a
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
      tabIndex="0"
    >
      {text}
    </a>
  </li>
);

export default Todo;
