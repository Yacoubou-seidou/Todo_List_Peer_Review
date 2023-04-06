jest.mock('./functionality.js');
const { addNewTask, deleteTask } = require('./functionality.js');

describe('Add and Remove', () => {
  test('Add task', () => {
    const task2 = 'Tasklist 2';
    const addtask = addNewTask(task2);
    expect(addtask).toBe(1);
  });

  test('Remove task', () => {
    const index = 1;
    const removetask = deleteTask(index);
    expect(removetask).toBe(1);
  });
});