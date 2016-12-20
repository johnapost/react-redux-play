// @flow

import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/TodoActions';

const AddTodoView = ({ dispatch }: Function) => {
  let input;

  const onSubmit = (e) => {
    e.preventDefault();

    // Guard for empty string
    if (!input.value.trim()) { return; }

    dispatch(addTodo(input.value));
    input.value = '';
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

const AddTodo = connect()(AddTodoView);

export default AddTodo;
