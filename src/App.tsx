import { useReducer } from 'react';
import './App.css';
import LoginStatus from './state-management/LoginStatus';
import AuthContext from './state-management/contexts/authContext';
import authReducer from './state-management/reducers/authReducer';

function App() {
	// const [tasks, dispatch] = useReducer(tasksReducer, []);
	const [user, dispatch] = useReducer(authReducer, '');

	return (
		// // <TasksContext.Provider value={{ tasks, dispatch }}>
		// 	<NavBar />
		// 	<HomePage />
		// </TasksContext.Provider>

		<AuthContext.Provider value={{ user, dispatch }}>
			<LoginStatus />
		</AuthContext.Provider>
	);
}

export default App;
