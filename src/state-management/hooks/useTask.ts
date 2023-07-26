import { useContext } from 'react';
import TasksContext from '../contexts/tasksContexts';

const useTask = () => useContext(TasksContext);

export default useTask;
