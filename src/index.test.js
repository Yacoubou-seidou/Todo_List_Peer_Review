jest.mock('./functionality.js');
const { addNewTask, deleteTask } = require('./functionality.js');

describe('Add and Remove', () => {
  test('should add a new task.', () => {
    const task2 = 'Tasklist 2';
    const addtask = addNewTask(task2);
    expect(addtask).toBe(1);
  });

  test('should remove one task from the array.', () => {
    const index = 1;
    const removetask = deleteTask(index);
    expect(removetask).toBe(1);
  });
});
