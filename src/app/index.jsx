import React from 'react';
import { render } from 'react-dom';

import Todos from './components/Todos';
import TodosProdiver from './features/TodosContext';
import './main.css';

// render app
render(
  (
    <main className="max-w-xl m-auto">
      <TodosProdiver>
        <Todos />
      </TodosProdiver>
    </main>
  ),
  document.getElementById('root')
);