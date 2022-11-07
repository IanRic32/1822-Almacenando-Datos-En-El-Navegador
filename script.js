import { addTask } from "./components/addTask";
const btn = document.querySelector('[data-form-btn]');
//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
