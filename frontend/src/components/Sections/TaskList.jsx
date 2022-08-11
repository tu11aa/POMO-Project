import React from 'react'
import TodoForm from '../Elements/TodoForm'
import TodoList from '../Elements/TodoList'
import styled from 'styled-components'
function TaskList() {
  return (
    <>
    <Title>
      Task List
    </Title>
    <br/>
    <TodoForm/>
    <TodoList/>
    {/* <TodoItem id='5' title='todo5' completed='true' /> */}
    </>
  )
}

export default TaskList

const Title=styled.div`
  font-size: x-large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
