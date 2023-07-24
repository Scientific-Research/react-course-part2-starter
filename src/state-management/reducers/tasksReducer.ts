interface Task {
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

type TaskAction = AddTask | DeleteTask;

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

export default tasksReducer;
