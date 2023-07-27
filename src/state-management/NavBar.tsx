import { useContext } from 'react';
import LoginStatus from './auth/LoginStatus';
import TasksContext from './tasks/tasksContexts';
import useCounterStore from './counter/store';

const NavBar = () => {
	// const { tasks, dispatch } = useContext(TasksContext);
	// const { counter } = useCounterStore();
	const counter = useCounterStore((s) => s.counter);

	console.log('Render NavBar...');

	return (
		<nav className="navbar d-flex justify-content-between">
			<span className="badge text-bg-secondary">
				{/* {tasks.length} */}
				{counter}
			</span>
			<LoginStatus />
		</nav>
	);
};

export default NavBar;
