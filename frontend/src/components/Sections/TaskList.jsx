import React from 'react'
import TodoForm from '../Elements/TodoForm'
import TodoList from '../Elements/TodoList'
import styled from 'styled-components'
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from 'react';
import { reset } from '../../features/todolist/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

function TaskList() {
  const dispatch = useDispatch()

  const { isError, isSuccess, message } = useSelector(
    (state) => state.todo
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset())
    }
    if (isSuccess){
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  return (
    <>
      <ToastContainer autoClose={3000} />
      <Title>
        Task List
      </Title>
      <br/>
      <TodoForm/>
      <TodoList/>
    </>
  )
}

export default TaskList

const Title=styled.div`
  font-size: x-large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
