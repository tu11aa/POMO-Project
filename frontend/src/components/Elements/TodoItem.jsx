import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTask, reset } from "../../features/todolist/todoSlice";

const TodoItem = ({ id, content, status }) => {
  const dispatch = useDispatch()

  const handleOnclick = (e) => {
    e.preventDefault();
    dispatch(deleteTask(id))
  }

  useEffect(()=>{
    dispatch(reset())
  }, [dispatch])

  const onChangeHandler = (e) => {
    if (status === "Done") {
      status = "Doing"
    }
    else {
      status = "Done"
    }
  }

  return (
    <Item>
      <div>
        <input type="checkbox" onChange={onChangeHandler} className="mr-3" checked={status === "Done"}></input>
        {content}
      </div>
      <button className="btn btn-danger" onClick={handleOnclick}> Delete </button>
    </Item>
  );
};

export default TodoItem;

const Item = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;
  margin-top: 20px;
  /* padding: 70px 0 30px 0; */
  color: black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: medium;
`;
