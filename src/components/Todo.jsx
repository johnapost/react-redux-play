import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
  <a
    onClick={onClick}
    tabIndex="0"
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </a>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
