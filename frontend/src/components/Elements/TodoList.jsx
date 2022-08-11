import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, reset } from '../../features/todolist/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
	const dispatch = useDispatch()

	const {tasks, isSuccess} = useSelector((state) => state.todo)

	useEffect(() => {
		return () => {
		  if (isSuccess) {
			dispatch(reset())
		  }
		}
	  }, [dispatch, isSuccess])

	  useEffect(() => {
		dispatch(getTasks())
	  }, [dispatch])

	return (
		<ul className='list-group'>{tasks.map((task) => (
			<TodoItem key={task._id} id={task.id} content={task.content} status={task.status} />
		))}
		</ul>
	);
};

export default TodoList;