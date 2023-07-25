import { useReducer } from 'react';
import './App.css';
import LoginStatus from './state-management/LoginStatus';
import AuthContext from './state-management/contexts/authContext';
import authReducer from './state-management/reducers/authReducer';
import tasksReducer from './state-management/reducers/tasksReducer';
import TasksContext from './state-management/contexts/tasksContexts';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';

function App() {
	const [tasks, taskDispatch] = useReducer(tasksReducer, []);
	const [user, authDispatch] = useReducer(authReducer, '');

	return (
		<TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
			<AuthContext.Provider value={{ user, dispatch: authDispatch }}>
				<NavBar />
				<HomePage />
				<LoginStatus />
			</AuthContext.Provider>
		</TasksContext.Provider>
	);
}

export default App;
