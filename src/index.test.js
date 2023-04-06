jest.mock('./functionality.js');
const {
  addNewTask, deleteTask, deleteAllCompleted, editTask, status,
} = require('./functionality.js');

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

  test('eddit description', () => {
    const index = 1;
    const description = 'I eddited';
    const edditedTask = editTask(index, description);
    expect(edditedTask).toMatch(/I eddited/);
  });

  test('check status', () => {
    const index = 1;
    const checked = false;
    const newStatus = status(index, checked);
    expect(newStatus).toBeFalsy();
  });

  test('delete all completed tasks', () => {
    const checked = true;
    const clearAllChecked = deleteAllCompleted(checked);
    expect(clearAllChecked).toBe(1);
  });
});