import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../features/todolist/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
	const dispatch = useDispatch()

	const tasks = useSelector((state) => state.todo.tasks)
	
	useEffect(() => {
		dispatch(getTasks())
	}, [dispatch])

	return (
		<ul className='list-group'>
			{tasks.map((task) => <TodoItem key={task._id} id={task._id} content={task.content} status={task.status} />)}
		</ul>
	);
};

export default TodoList;