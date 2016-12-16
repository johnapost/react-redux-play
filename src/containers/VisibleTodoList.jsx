// @flow

import { connect } from 'react-redux';
import type { TodoType, VisibilityFilter } from '../types';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';

const getVisibleTodos = (todos: Array<TodoType>, filter: VisibilityFilter) => {
  switch (filter) {
    case 'SHOW_ALL': return todos;
    case 'SHOW_COMPLETED': return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE': return todos.filter(t => !t.completed);
    default: return todos;
  }
};

const mapStateToProps = state => (
  { todos: getVisibleTodos(state.todos, state.visibilityFilter) }
);

const mapDispatchToProps = dispatch => ({
  onTodoClick: (id) => { dispatch(toggleTodo(id)); },
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
