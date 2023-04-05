const addNewTask = (value) => {
  const array = []
  const newValue = { description: value, completed: false, index: array.length + 1 }
    document.body.innerHTML =
    '<div>' +
    '  <ul id="list"><li></li></ul>' +
    '</div>';
    const list = document.querySelectorAll('#list li');
  array.push(newValue);
  return array.length===list.length
};

const deleteTask = (id) => {
  const array = [
    {
      description: 'Todo1',
      checked: false,
      id: 1,
    },
  ];
    document.body.innerHTML =
    '<div>' +
    '  <ul id="list"><li></li></ul>' +
    '</div>';
    const list = document.querySelectorAll('#list li');

  array.splice(id, 1);
  return array.length === list.length;
};
module.exports={addNewTask,deleteTask}