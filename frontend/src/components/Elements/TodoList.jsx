import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
	const todos = useSelector((state) => state.todo.tasks)

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.content} completed={todo.status} />
			))}
		</ul>
	);
};

export default TodoList;