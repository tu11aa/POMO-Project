import React from 'react'
import TodoForm from '../Elements/TodoForm'
import TodoList from '../Elements/TodoList'
function TaskList() {
  return (
    <>
    <br/>
    Task List
    <br/>
    <br/>
    <TodoForm/>
    <TodoList/>
    {/* <TodoItem id='5' title='todo5' completed='true' /> */}
    </>
  )
}

export default TaskList
