import {createTask} from "./addTask.js";
export const readTasks = ()=>{
    const list= document.querySelector("[data-list]");
    const tasklist=JSON/parse(localStorage.getItem("tasks"))||[];
    tasklist.forEach((task)=>{
        list.appendChild(createTask(task));
    });
};