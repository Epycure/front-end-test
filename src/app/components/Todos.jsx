import React, { useContext } from 'react';

import { TodosContext } from '../features/TodosContext';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const Todos = () => {
  const { todos } = useContext(TodosContext);

  /* TODO: sort the Todos list:
    - last created todos should appear first
    - archived todos should appear at the bottom of the list
  */
  const sortedTodos = todos;

  return (
    <section>
      <h1 className="mb-4 text-xl font-bold text-gray-600">
        To-Dos
      </h1>
      <TodoForm />
      <section>
        {sortedTodos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </section>
    </section>
  );
};

export default Todos;