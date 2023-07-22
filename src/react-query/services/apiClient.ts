import { QueryFunction, QueryKey } from '@tanstack/react-query';
import axios from 'axios';
import { Todo } from './todoService';

const axiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

class APIClient<T> {
	endpoint: string;
	static getAll: QueryFunction<Todo[], QueryKey, any> | undefined;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = () => {
		// debugger;
		return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
	};

	post = (data: T) => {
		return axiosInstance
			.post<T>(this.endpoint, data)
			.then((res) => res.data);
	};
}

export default APIClient;
