import './App.css';
import PostList from './react-query/PostList';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';

function App() {
	return (
		<>
			{/* <h1>Todo Lists</h1>
			<TodoList /> */}
			{/* <h1>Post Lists</h1> */}
			<TodoForm />
			<TodoList />
		</>
	);
}

export default App;
