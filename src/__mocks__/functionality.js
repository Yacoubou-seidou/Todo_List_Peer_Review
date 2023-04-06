const addNewTask = (value) => {
  const array = [];
  const newValue = { description: value, completed: false, index: array.length + 1 };
  array.push(newValue);
  return array.length;
};

const deleteTask = (id) => {
  const array = [
    {
      description: 'Todo1',
      checked: false,
      id: 1,
    },
    {
      description: 'Todo2',
      checked: false,
      id: 2,
    },
  ];
  array.splice(id, 1);
  return array.length;
};

const editTask = (id, edditedDescription) => {
  const array = [
    {
      description: 'Task-1',
      checked: false,
      id: 1,
    },
    {
      description: 'task-2',
      checked: false,
      id: 2,
    },
  ];
  const newTodo = {
    description: edditedDescription,
    checked: false,
    id: 2,
  };

  array.splice(id, 1, newTodo);

  return array[id].description;
};
const status = (id, state) => {
  const array = [
    {
      description: 'Task-1',
      checked: false,
      id: 1,
    },
    {
      description: 'task-2',
      checked: true,
      id: 2,
    },
  ];

  const newTodo = {
    description: array[id].description,
    checked: state,
    id: array[id].id,
  };

  array.splice(id, 1, newTodo);

  return array[id].checked;
};
const deleteAllCompleted = (checked) => {
  const array = [
    {
      description: 'Task-1',
      checked: true,
      id: 1,
    },
    {
      description: 'task-2',
      checked: true,
      id: 2,
    },
    {
      description: 'task-3',
      checked: false,
      id: 3,
    },
  ];
  const newArr = array.filter((el) => el.checked !== checked);

  return newArr.length;
};
module.exports = {
  addNewTask, deleteTask, deleteAllCompleted, editTask, status,
};