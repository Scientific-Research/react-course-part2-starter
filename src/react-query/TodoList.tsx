import useTodos from './hooks/useTodos';
// import React, { useEffect, useState } from 'react';

const TodoList = () => {
	const { data: todos, error, isLoading } = useTodos();

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>{error.message}</p>;

	// We don't need the following data using react-query anymore:
	//------------------------------------------------
	// const [todos, setTodos] = useState<Todo[]>([]);
	// const [error, setError] = useState('');

	// useEffect(() => {
	// 	axios
	// 		.get('https://jsonplaceholder.typicode.com/todos')
	// 		.then((res) => setTodos(res.data))
	// 		.catch((error) => setError(error));
	// }, []);
	//------------------------------------------------

	return (
		<ul className="list-group">
			{todos?.map((todo) => (
				<li key={todo.id} className="list-group-item">
					{todo.title}
				</li>
			))}
		</ul>
	);
};

export default TodoList;
