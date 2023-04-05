import { addNewTask, deleteTask } from "./__Mock__/functionnality";
describe('Add and Remove', () => {
  it('Add task', () => {
    const task2 = 'Tasklist 2';
    const addtask = addNewTask(task2);
    expect(addtask).toBe(true);
  });

  it('Remove task', () => {
    const index = 1;
    const removetask = deleteTask(index);
    expect(removetask).toBe(true);
  });
});