import React from 'react'

const ListTasks = ({task}) => {
  return (
    <>
      <div className='list-tasks'>
        {task.title}
        <button className='delete-btn'>
        Delete</button>
      </div>      
    </>
  )
}

export default ListTasks