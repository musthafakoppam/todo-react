import React from 'react'
import AddTask from './AddTask'
import ListTasks from './ListTasks'
import "./Todo.css";


const Todo = () => {
  return (
    <>
    <div className='todo-container'>
        <div className='header'>TODO APP</div>
        <div className='add-task'>
          <AddTask/>
        </div>
        <div className='tasks'>
          <ListTasks/>
        </div>
    </div>
    </>
  )
}

export default Todo