import {
  addNewTask, editTask, deleteTask, deleteAllCompleted,
} from './functionality.js';
import updateStatus from './status.js';

const addForm = document.querySelector('.addForm');
const todoPlaceholder = document.querySelector('.todoPlaceholder');
const inputValue = document.querySelector('.inputValue');

let todoArray = [];
const localData = localStorage.getItem('todoArray');
if (localData) {
  todoArray = JSON.parse(localData);
}

const component = () => {
  const element = document.createElement('ul');
  const filteredArray = todoArray.sort((a, b) => a.index - b.index);
  let content = '';
  filteredArray.forEach((todo) => {
    content += `
    <li class='borderStyle'>
    <input class='status'  ${todo.completed ? 'checked' : undefined} type='checkbox' id='${todo.index}'/>
    <input class='formel' type="text" id="description" name="description" value='${todo.description}'>
    <span class='spanbtn'>&#8942;</span>
    </li>
    `;
  });
  element.innerHTML = content;
  element.classList.add('listContent');
  return element;
};
const buttonElement = () => {
  const btnDelete = document.createElement('input');
  btnDelete.value = 'Clear all completed';
  btnDelete.classList.add('btn');
  btnDelete.classList.add('borderStyle');
  btnDelete.type = 'button';
  btnDelete.addEventListener('click', () => {
    if (todoArray.length > 0) {
      deleteAllCompleted(todoArray);
      const deleteBtn = document.querySelectorAll('.spanbtn');
      todoArray.forEach((todo, index) => {
        if (todo.completed === true) {
          deleteBtn[index].parentNode.remove();
        }
      });
    }
  });
  return btnDelete;
};
todoPlaceholder.appendChild(component());
todoPlaceholder.appendChild(buttonElement());
const listContent = document.querySelector('.listContent');
const deleteFunction = () => {
  const deleteBtn = document.querySelectorAll('.spanbtn');

  deleteBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      deleteTask(todoArray, index);
      btn.parentNode.remove();
    });
  });
};
const EditFunction = () => {
  const formsElements = document.querySelectorAll('.formel');
  formsElements.forEach((formel, index) => {
    formel.addEventListener('input', (e) => {
      e.preventDefault();
      editTask(todoArray, index, e.target.value);
    });
  });
};
const statusChange = () => {
  const checkboxInput = document.querySelectorAll('.status');
  checkboxInput.forEach((checkbox, index) => {
    checkbox.addEventListener('click', (e) => {
      updateStatus(todoArray, index, e.target.checked);
    });
  });
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = { description: inputValue.value, completed: false, index: todoArray.length + 1 };
  addNewTask(todoArray, value);
  let element = '';
  todoArray.forEach((todo) => {
    element += `
    <li class='borderStyle'>
    <input class='status' ${todo.completed ? 'checked' : undefined}  type='checkbox' id='${todo.index}'/>
    <input class='formel' type="text" id="description" name="description" value='${todo.description}'>
    <span class='spanbtn'>&#8942;</span>
    </li>
    `;
  });
  listContent.innerHTML = element;
  statusChange();
  deleteFunction();
  EditFunction();
});

deleteFunction();
EditFunction();
statusChange();