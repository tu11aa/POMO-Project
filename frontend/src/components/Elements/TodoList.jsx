import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../features/todolist/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(getTasks())
	}, [dispatch]);

	const {tasks} = useSelector((state) => state.todo);

	return (
		<ul className='list-group'>
			{tasks.map((task, index) => <TodoItem key={task._id} index = {index} id={task._id} content={task.content} status={task.status} />)}
		</ul>
	);
};

export default TodoList;