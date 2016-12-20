// @flow

import { connect } from 'react-redux';
import type { TodoProps } from '../components/Todo/TodoProps';
import type { VisibilityFilter } from '../actions/visibility';
import TodoList from '../components/TodoList/TodoList';
import { toggleTodo } from '../actions/todo';

const getVisibleTodos = (todos: Array<TodoProps>, filter: VisibilityFilter) => {
  switch (filter) {
    case 'SHOW_ALL': return todos;
    case 'SHOW_COMPLETED': return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE': return todos.filter(t => !t.completed);
    default: return todos;
  }
};

const mapStateToProps: Object = state => (
  { todos: getVisibleTodos(state.todos, state.visibilityFilter) }
);

const mapDispatchToProps: Object = dispatch => ({
  onTodoClick: (id) => { dispatch(toggleTodo(id)); },
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
