import type { TodoProps } from '../Todo/TodoProps';

export type TodoListProps = {
  todos: Array<TodoProps>,
  onTodoClick: (number) => void,
};
