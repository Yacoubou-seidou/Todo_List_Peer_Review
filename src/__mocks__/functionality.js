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

module.exports = {
  addNewTask, deleteTask,
};