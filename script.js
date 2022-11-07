import { addTask } from "./components/addTask";
import { readTasks } from "./components/readTasks";

const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);
readTasks();
