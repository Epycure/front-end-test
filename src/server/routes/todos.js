const { Router } = require('express');
const uuid = require('uuid');

const router = Router({ mergeParams: true });

const todos = [
  {
    id: uuid.v4(),
    note: `Finish API`,
    archived: true,
    created_at: (new Date('2020-04-20T10:00:00')).getTime(),
  },
  {
    id: uuid.v4(),
    note: `Write API calls in TodosContext`,
    archived: true,
    created_at: (new Date('2020-04-20T10:05:00')).getTime(),
  },
  {
    id: uuid.v4(),
    note: `Sort todos in TodosList component`,
    archived: false,
    created_at: (new Date('2020-04-20T10:05:00')).getTime(),
  },
  {
    id: uuid.v4(),
    note: `Complete TodoForm component`,
    archived: false,
    created_at: (new Date('2020-04-20T10:10:00')).getTime(),
  },
  {
    id: uuid.v4(),
    note: `Write TodoItem component`,
    archived: false,
    created_at: (new Date('2020-04-20T10:15:00')).getTime(),
  },
  {
    id: uuid.v4(),
    note: `Submit my test`,
    archived: false,
    created_at: (new Date('2020-04-20T10:20:00')).getTime(),
  }
];

// get all todos
router.get('/', (req, res) => {
  return res.send(todos);
});

// get todo
router.get('/:id', (req, res) => {
  const todo = todos.find(item => item.id === req.params.id);
  if (!todo) {
    return res.status(404).send(`Could not find To-Do entry with ID ${req.params.id}.`);
  }
  return res.send(todo);
});

// add todo
router.post('/', (req, res) => {
  const todo = {
    id: uuid.v4(),
    note: req.body.note || '',
    archived: false,
    created_at: Date.now(),
  };
  todos.push(todo);
  return res.send(todo);
});

// update todo
router.put('/:id', (req, res) => {
  const todo = todos.find(item => item.id === req.params.id);
  if (!todo) {
    return res.status(404).send(`Could not find To-Do entry with ID ${req.params.id}.`);
  }
  todo.note = req.body.note || '';
  return res.send(todo);
});

// archive todo
router.post('/:id/archive', (req, res) => {
  const todo = todos.find(item => item.id === req.params.id);
  if (!todo) {
    return res.status(404).send(`Could not find To-Do entry with ID ${req.params.id}.`);
  }
  todo.archived = true;
  return res.send(todo);
});

// unarchive todo
router.post('/:id/unarchive', (req, res) => {
  const todo = todos.find(item => item.id === req.params.id);
  if (!todo) {
    return res.status(404).send(`Could not find To-Do entry with ID ${req.params.id}.`);
  }
  todo.archived = false;
  return res.send(todo);
});

// delete todo
router.delete('/:id', (req, res) => {
  const index = todos.findIndex(item => item.id === req.params.id);
  if (index < 0) {
    return res.status(404).send(`Could not find To-Do entry with ID ${req.params.id}.`);
  }
  todos.splice(index, 1);
  return res.send({
    id: req.params.id,
  });
});

module.exports = router;