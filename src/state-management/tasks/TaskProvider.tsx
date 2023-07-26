import { ReactNode, useReducer } from 'react';
import TasksContext from './tasksContexts';

export interface Task {
	id: number;
	title: string;
}

interface AddTask {
	type: 'ADD';
	task: Task;
}

interface DeleteTask {
	type: 'DELETE';
	taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
	if (action.type === 'ADD') {
		// return [{ id: Date.now(), title: 'Task ' + Date.now() }, ...tasks];
		return [action.task, ...tasks];
	}
	if (action.type === 'DELETE') {
		return tasks.filter((t) => t.id !== action.taskId);
	}
	return tasks;
};
 
interface Props {
	children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
	const [tasks, dispatch] = useReducer(tasksReducer, []);

	return (
		<TasksContext.Provider value={{ tasks, dispatch }}>
			{children}
		</TasksContext.Provider>
	);
};

export default TaskProvider;
