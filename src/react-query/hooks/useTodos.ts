import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from '../constants';
import todoService, { Todo } from '../services/todoService';

const useTodos = () => {
	// const fetchTodos = () =>
	// 	axios.get<Todo[]>('/todos').then((res) => res.data);

	return useQuery<Todo[], Error>({
		queryKey: CACHE_KEY_TODOS,
		// queryFn: fetchTodos,
		// queryFn: apiClient.getAll,
		queryFn: todoService.getAll,

		staleTime: 10 * 1000,
	});
};

export default useTodos;
