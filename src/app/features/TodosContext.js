import axios from 'axios';
import React, {
  createContext, useEffect, useState,
} from 'react';

export const TodosContext = createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
});

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(
    () => {
      /* TODO: load todos from the server to the interface
        - make an API call (using axios) to get all the todos
        - on server response, fill the todos list using `setTodos()`
      */
    },
    [],
  );

  const methods = {
    addTodo: (todo) => {
      /* TODO: add todo on both server and interface
        - make an API call (using axios) to add the todo
        - on server response, add the new todo to the todos list using `setTodos()`
      */
    },
    updateTodo: (id, todo) => {
      /* TODO: update todo on both server and interface
        - make an API call (using axios) to update the todo based on the `id` argument
        - on server response, update the todo in the todos list using `setTodos()`
      */
    },
    toggleTodo: (id, archived) => {
      /* TODO: archive/unarchive todo on both server and interface 
        - if the todo is archived, make an API call (using axios) to unarchive it based on the `id` argument
        - if the todo is unarchived, make an API call (using axios) to archive it based on the `id` argument
        - on server response, update the todo in the todos list using `setTodos()`
      */
    },
    deleteTodo: (id) => {
      /* TODO: delete todo on both server and interface
        - make an API call (using axios) to delete the todo based on the `id` argument
        - on server response, delete the todo from the todos list using `setTodos()`
      */
    },
  };

  return (
    <TodosContext.Provider value={{ todos, ...methods }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;