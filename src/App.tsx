import './App.css';
import AuthProvider from './state-management/auth/AuthProvider';
import HomePage from './state-management/HomePage';
import LoginStatus from './state-management/auth/LoginStatus';
import NavBar from './state-management/NavBar';
// import TaskProvider from './state-management/tasks/TaskProvider';
import { TaskProvider } from './state-management/tasks';
import Counter from './state-management/counter/Counter';

function App() {
	// const [tasks, taskDispatch] = useReducer(tasksReducer, []);
	// const [user, authDispatch] = useReducer(authReducer, '');

	return (
		// <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
		//<AuthContext.Provider value={{ user, dispatch: authDispatch }}>
		<TaskProvider>
			<AuthProvider>
				<NavBar />
				<HomePage />
				<LoginStatus />
				<Counter />
			</AuthProvider>
		</TaskProvider>
	);
}

export default App;
