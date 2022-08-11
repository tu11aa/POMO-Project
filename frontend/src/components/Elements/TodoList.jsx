import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, reset } from '../../features/todolist/todoSlice';
import TodoItem from './TodoItem';
import { ToastContainer, toast } from "react-toastify";

const TodoList = () => {
	const dispatch = useDispatch()
	
	useEffect(() => {
		console.log(tasks)
		dispatch(getTasks())
		dispatch(reset())
	}, [])


	const tasks = useSelector((state) => state.todo.tasks)

	
	// useEffect(() => {
	// 	console.log("tasks")
	// 	// dispatch(reset())
	// }, [tasks])

	return (
		<>
			<ToastContainer autoClose={3000} />
			<ul className='list-group'>{
				tasks.map((task) => (
					<TodoItem key={task._id} id={task._id} content={task.content} status={task.status} />
				))}
			</ul>
		</>
	);
};

export default TodoList;