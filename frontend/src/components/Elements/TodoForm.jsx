import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTask, reset } from '../../features/todolist/todoSlice';
import { ToastContainer, toast } from "react-toastify";

const TodoForm = () => {
  const dispatch = useDispatch()

  const [content, setContent] = useState("")
  const { tasks, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.todo
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess){
      dispatch(reset());
    }
  }, [isSuccess, isError, dispatch]);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({content}))
  }

	return (
        <Wrapper>
          <ToastContainer autoClose={3000} />
          <Form>
              <input type="text" placeholder="Enter your task here" value={content} onChange={(e)=>setContent(e.target.value)} id="fname" name="fname" className="font20 extraBold" />
          </Form>
          
          <AddButton type="submit" value="Add" onClick={handleSubmit} className="pointer animate radius8" style={{ maxWidth: "200px" } } />
        </Wrapper>
	);
};

export default TodoForm;

const Wrapper=styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 0 auto
`

const Form = styled.form`

display: flex;
    justify-content: space-between;
    text-align: left;
    input{
        width: 95%;  
    };
    margin-top: 10px;
    width:100%;
    margin: 0 auto;
    background-color: transparent;
    box-shadow: none;
    height: 50px;
    
`;
const AddButton = styled.input`
  background-color: #1f1f1f;
  width: 25%;
  outline: none;
  color: #fff;
  font-size: x-large;
  :hover {
    background-color: #282828;
    color: #fff;
  }
  font-family: "Lucida Console", "Courier New", monospace;
`;