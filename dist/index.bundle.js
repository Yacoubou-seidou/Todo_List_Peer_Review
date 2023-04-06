/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functionality.js":
/*!******************************!*\
  !*** ./src/functionality.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTask": () => (/* binding */ addNewTask),
/* harmony export */   "deleteAllCompleted": () => (/* binding */ deleteAllCompleted),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
const addForm = document.querySelector('.addForm');
const addNewTask = (array, value) => {
  array.push(value);
  localStorage.setItem('todoArray', JSON.stringify(array));
  addForm.reset();
};

const deleteTask = (array, id) => {
  array.splice(id, 1);
  for (let index = 0; index < array.length; index += 1) {
    array[index].index = index + 1;
  }
  localStorage.setItem('todoArray', JSON.stringify(array));
};

const editTask = (array, id, value) => {
  const edit = {
    description: value, completed: false, index: id + 1,
  };
  array.splice(id, 1, edit);
  localStorage.setItem('todoArray', JSON.stringify(array));
};

const deleteAllCompleted = (array) => {
  const newArray = array.filter((element) => element.completed === false);
  for (let idx = 0; idx < newArray.length; idx += 1) {
    newArray[idx].index = idx + 1;
  }
  localStorage.setItem('todoArray', JSON.stringify(newArray));
};


/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((array, index, value) => {
  array[index].completed = value;
  localStorage.setItem('todoArray', JSON.stringify(array));
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functionality.js */ "./src/functionality.js");
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.js */ "./src/status.js");



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
      (0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.deleteAllCompleted)(todoArray);
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
      (0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(todoArray, index);
      btn.parentNode.remove();
    });
  });
};
const EditFunction = () => {
  const formsElements = document.querySelectorAll('.formel');
  formsElements.forEach((formel, index) => {
    formel.addEventListener('input', (e) => {
      e.preventDefault();
      (0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.editTask)(todoArray, index, e.target.value);
    });
  });
};
const statusChange = () => {
  const checkboxInput = document.querySelectorAll('.status');
  checkboxInput.forEach((checkbox, index) => {
    checkbox.addEventListener('click', (e) => {
      (0,_status_js__WEBPACK_IMPORTED_MODULE_1__["default"])(todoArray, index, e.target.checked);
    });
  });
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = { description: inputValue.value, completed: false, index: todoArray.length + 1 };
  (0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.addNewTask)(todoArray, value);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3QkEsaUVBQWU7QUFDZjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O1VDSEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNKNEI7QUFDVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsd0NBQXdDLHNCQUFzQixXQUFXO0FBQ3RHLG1GQUFtRixpQkFBaUI7QUFDcEcsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxRUFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQVU7QUFDaEI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQVE7QUFDZCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFZO0FBQ2xCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsRUFBRSw2REFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlDQUF5QyxzQkFBc0IsV0FBVztBQUN0RyxtRkFBbUYsaUJBQWlCO0FBQ3BHLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrYnVuZGxlci8uL3NyYy9mdW5jdGlvbmFsaXR5LmpzIiwid2VicGFjazovL3dlYnBhY2tidW5kbGVyLy4vc3JjL3N0YXR1cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrYnVuZGxlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrYnVuZGxlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja2J1bmRsZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrYnVuZGxlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2tidW5kbGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkRm9ybScpO1xyXG5jb25zdCBhZGROZXdUYXNrID0gKGFycmF5LCB2YWx1ZSkgPT4ge1xyXG4gIGFycmF5LnB1c2godmFsdWUpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvQXJyYXknLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xyXG4gIGFkZEZvcm0ucmVzZXQoKTtcclxufTtcclxuXHJcbmNvbnN0IGRlbGV0ZVRhc2sgPSAoYXJyYXksIGlkKSA9PiB7XHJcbiAgYXJyYXkuc3BsaWNlKGlkLCAxKTtcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCArPSAxKSB7XHJcbiAgICBhcnJheVtpbmRleF0uaW5kZXggPSBpbmRleCArIDE7XHJcbiAgfVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvQXJyYXknLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xyXG59O1xyXG5cclxuY29uc3QgZWRpdFRhc2sgPSAoYXJyYXksIGlkLCB2YWx1ZSkgPT4ge1xyXG4gIGNvbnN0IGVkaXQgPSB7XHJcbiAgICBkZXNjcmlwdGlvbjogdmFsdWUsIGNvbXBsZXRlZDogZmFsc2UsIGluZGV4OiBpZCArIDEsXHJcbiAgfTtcclxuICBhcnJheS5zcGxpY2UoaWQsIDEsIGVkaXQpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvQXJyYXknLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlQWxsQ29tcGxldGVkID0gKGFycmF5KSA9PiB7XHJcbiAgY29uc3QgbmV3QXJyYXkgPSBhcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuY29tcGxldGVkID09PSBmYWxzZSk7XHJcbiAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbmV3QXJyYXkubGVuZ3RoOyBpZHggKz0gMSkge1xyXG4gICAgbmV3QXJyYXlbaWR4XS5pbmRleCA9IGlkeCArIDE7XHJcbiAgfVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvQXJyYXknLCBKU09OLnN0cmluZ2lmeShuZXdBcnJheSkpO1xyXG59O1xyXG5leHBvcnQge1xyXG4gIGFkZE5ld1Rhc2ssIGRlbGV0ZVRhc2ssIGVkaXRUYXNrLCBkZWxldGVBbGxDb21wbGV0ZWQsXHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgKGFycmF5LCBpbmRleCwgdmFsdWUpID0+IHtcclxuICBhcnJheVtpbmRleF0uY29tcGxldGVkID0gdmFsdWU7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9BcnJheScsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gIGFkZE5ld1Rhc2ssIGVkaXRUYXNrLCBkZWxldGVUYXNrLCBkZWxldGVBbGxDb21wbGV0ZWQsXHJcbn0gZnJvbSAnLi9mdW5jdGlvbmFsaXR5LmpzJztcclxuaW1wb3J0IHVwZGF0ZVN0YXR1cyBmcm9tICcuL3N0YXR1cy5qcyc7XHJcblxyXG5jb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEZvcm0nKTtcclxuY29uc3QgdG9kb1BsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9QbGFjZWhvbGRlcicpO1xyXG5jb25zdCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0VmFsdWUnKTtcclxuXHJcbmxldCB0b2RvQXJyYXkgPSBbXTtcclxuY29uc3QgbG9jYWxEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9BcnJheScpO1xyXG5pZiAobG9jYWxEYXRhKSB7XHJcbiAgdG9kb0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbERhdGEpO1xyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IHRvZG9BcnJheS5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XHJcbiAgbGV0IGNvbnRlbnQgPSAnJztcclxuICBmaWx0ZXJlZEFycmF5LmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgIGNvbnRlbnQgKz0gYFxyXG4gICAgPGxpIGNsYXNzPSdib3JkZXJTdHlsZSc+XHJcbiAgICA8aW5wdXQgY2xhc3M9J3N0YXR1cycgICR7dG9kby5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiB1bmRlZmluZWR9IHR5cGU9J2NoZWNrYm94JyBpZD0nJHt0b2RvLmluZGV4fScvPlxyXG4gICAgPGlucHV0IGNsYXNzPSdmb3JtZWwnIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIHZhbHVlPScke3RvZG8uZGVzY3JpcHRpb259Jz5cclxuICAgIDxzcGFuIGNsYXNzPSdzcGFuYnRuJz4mIzg5NDI7PC9zcGFuPlxyXG4gICAgPC9saT5cclxuICAgIGA7XHJcbiAgfSk7XHJcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGlzdENvbnRlbnQnKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuY29uc3QgYnV0dG9uRWxlbWVudCA9ICgpID0+IHtcclxuICBjb25zdCBidG5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGJ0bkRlbGV0ZS52YWx1ZSA9ICdDbGVhciBhbGwgY29tcGxldGVkJztcclxuICBidG5EZWxldGUuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XHJcbiAgYnRuRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2JvcmRlclN0eWxlJyk7XHJcbiAgYnRuRGVsZXRlLnR5cGUgPSAnYnV0dG9uJztcclxuICBidG5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAodG9kb0FycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgZGVsZXRlQWxsQ29tcGxldGVkKHRvZG9BcnJheSk7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGFuYnRuJyk7XHJcbiAgICAgIHRvZG9BcnJheS5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmICh0b2RvLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgZGVsZXRlQnRuW2luZGV4XS5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGJ0bkRlbGV0ZTtcclxufTtcclxudG9kb1BsYWNlaG9sZGVyLmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxudG9kb1BsYWNlaG9sZGVyLmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQoKSk7XHJcbmNvbnN0IGxpc3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RDb250ZW50Jyk7XHJcbmNvbnN0IGRlbGV0ZUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGFuYnRuJyk7XHJcblxyXG4gIGRlbGV0ZUJ0bi5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGRlbGV0ZVRhc2sodG9kb0FycmF5LCBpbmRleCk7XHJcbiAgICAgIGJ0bi5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IEVkaXRGdW5jdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBmb3Jtc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1lbCcpO1xyXG4gIGZvcm1zRWxlbWVudHMuZm9yRWFjaCgoZm9ybWVsLCBpbmRleCkgPT4ge1xyXG4gICAgZm9ybWVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlZGl0VGFzayh0b2RvQXJyYXksIGluZGV4LCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuY29uc3Qgc3RhdHVzQ2hhbmdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNoZWNrYm94SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhdHVzJyk7XHJcbiAgY2hlY2tib3hJbnB1dC5mb3JFYWNoKChjaGVja2JveCwgaW5kZXgpID0+IHtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgdXBkYXRlU3RhdHVzKHRvZG9BcnJheSwgaW5kZXgsIGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5hZGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHZhbHVlID0geyBkZXNjcmlwdGlvbjogaW5wdXRWYWx1ZS52YWx1ZSwgY29tcGxldGVkOiBmYWxzZSwgaW5kZXg6IHRvZG9BcnJheS5sZW5ndGggKyAxIH07XHJcbiAgYWRkTmV3VGFzayh0b2RvQXJyYXksIHZhbHVlKTtcclxuICBsZXQgZWxlbWVudCA9ICcnO1xyXG4gIHRvZG9BcnJheS5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICBlbGVtZW50ICs9IGBcclxuICAgIDxsaSBjbGFzcz0nYm9yZGVyU3R5bGUnPlxyXG4gICAgPGlucHV0IGNsYXNzPSdzdGF0dXMnICR7dG9kby5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiB1bmRlZmluZWR9ICB0eXBlPSdjaGVja2JveCcgaWQ9JyR7dG9kby5pbmRleH0nLz5cclxuICAgIDxpbnB1dCBjbGFzcz0nZm9ybWVsJyB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIiB2YWx1ZT0nJHt0b2RvLmRlc2NyaXB0aW9ufSc+XHJcbiAgICA8c3BhbiBjbGFzcz0nc3BhbmJ0bic+JiM4OTQyOzwvc3Bhbj5cclxuICAgIDwvbGk+XHJcbiAgICBgO1xyXG4gIH0pO1xyXG4gIGxpc3RDb250ZW50LmlubmVySFRNTCA9IGVsZW1lbnQ7XHJcbiAgc3RhdHVzQ2hhbmdlKCk7XHJcbiAgZGVsZXRlRnVuY3Rpb24oKTtcclxuICBFZGl0RnVuY3Rpb24oKTtcclxufSk7XHJcblxyXG5kZWxldGVGdW5jdGlvbigpO1xyXG5FZGl0RnVuY3Rpb24oKTtcclxuc3RhdHVzQ2hhbmdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9