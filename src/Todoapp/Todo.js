import React, { useState } from 'react'
import AddTask from './AddTask'
import ListTasks from './ListTasks'
import "./Todo.css";


const Todo = () => {
  const [tasks, setTasks]= useState ([
    // {title: "Learn HTML"},
    // {title: "Learn CSS"},
    // {title: "Learn JAVASCRIPT"}
  ])

  const inTask =(title) => {
    const newTask= [...tasks, {title}];
    setTasks (newTask);
  }

  const removeTask = (index)=> {
    const newTask = [...tasks]
    newTask.splice (index,1);
    setTasks(newTask);
  }


  return (
    <>
    <div className='todo-container'>
        <div className='header'>TODO APP</div>
        <div className='add-task'>
          <AddTask inTask = {inTask} />
        </div>
        <div className='tasks'>
          {tasks.map((task, index) => (
            <ListTasks task = {task} 
            removeTask ={removeTask}
            index= {index}
            // key={index}
            />
          ))}          
        </div>
    </div>
    </>
  )
}

export default Todo