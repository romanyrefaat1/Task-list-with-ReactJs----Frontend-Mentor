import React from 'react'

import './Interactive.css';
import AddTask from './AddTask/AddTask';
import Tasks from './Tasks/Tasks';

const Interactive = () => {
  return (
    <div className='interactive'>
        <AddTask />
        <Tasks />
    </div>
  )
}

export default Interactive