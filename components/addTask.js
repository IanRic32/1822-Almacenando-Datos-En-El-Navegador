import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (evento)=> {
    const list = document.querySelector('[data-list]');
    const task = createTask(evento);
    list.appendChild(task);
  }
const createTask = (evento) => {
    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem("task") ||[] );  
    const input = document.querySelector('[data-form-input]');
    const calendar= document.querySelector("[data-form-date]");
  
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');
  
    const task = document.createElement('li');
    task.classList.add('card');
    input.value = '';
    //backticks
    const taskContent = document.createElement('div');
    const taskObj = {
      value,
      dateFormat
    } ;
    taskList.push(taskObj);
  
    sessionStorage.setItem("task",JSON.stringify(taskList));//Recibe llave y valor
  
  
    //LocalStorage....
    localStorage.setItem("task",JSON.stringify(taskObj));//localstorage solo guarda la informacion mas reciente que recibe
  
  
  
  //ocuparemos la libreria moment la cual nos deja estandarizar las fechas
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    const dateElement = document.createElement("span") ;
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
  };