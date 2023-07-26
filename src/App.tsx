import './App.css';
import AuthProvider from './state-management/AuthProvider';
import HomePage from './state-management/HomePage';
import LoginStatus from './state-management/LoginStatus';
import NavBar from './state-management/NavBar';
import TaskProvider from './state-management/TaskProvider';

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
			</AuthProvider>
		</TaskProvider>
	);
}

export default App;
