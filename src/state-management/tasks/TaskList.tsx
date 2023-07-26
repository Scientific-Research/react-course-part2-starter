import { useContext } from 'react';
import TasksContext from './tasksContexts';
import useAuth from '../auth/LoginStatus';

const useTask = () => useContext(TasksContext);

const TaskList = () => {
	// const [tasks, setTasks] = useState<Task[]>([]);

	// const [tasks, dispatch] = useReducer(tasksReducer, []);
	// const context = useContext(TasksContext);

	// const { tasks, dispatch } = useContext(TasksContext);
	const { tasks, dispatch } = useTask();

	const user = useAuth();

	return (
		<>
			<p>user: {user}</p>
			<button
				// onClick={() =>
				// 	setTasks([
				// 		{ id: Date.now(), title: 'Task ' + Date.now() },
				// 		...tasks,
				// 	])
				// }
				// onClick={() => dispatch({ type: 'ADD' })}
				onClick={() =>
					dispatch({
						type: 'ADD',
						task: { id: Date.now(), title: 'Task' + Date.now() },
					})
				}
				className="btn btn-primary my-3"
			>
				Add Task
			</button>
			<ul className="list-group">
				{tasks.map((task) => (
					<li
						key={task.id}
						className="list-group-item d-flex justify-content-between align-items-center"
					>
						<span className="flex-grow-1">{task.title}</span>
						<button
							className="btn btn-outline-danger"
							// onClick={() =>
							// 	setTasks(tasks.filter((t) => t.id !== task.id))
							// }
							onClick={() =>
								dispatch({ type: 'DELETE', taskId: task.id })
							}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default TaskList;
