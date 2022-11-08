import {createTask} from "./addTask.js";
import dateElement from "./dateElement.js";
export const readTasks = ()=>{
    const list= document.querySelector("[data-list]");
    const tasklist=JSON/parse(localStorage.getItem("tasks"))||[];
    tasklist.forEach((task)=>{
        list.appendChild(dateElement(task.dateFormat));
        list.appendChild(createTask(task));
    });



};