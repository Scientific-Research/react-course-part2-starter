import { useReducer } from 'react';
import useCounterStore from './store';

// interface Action {
// 	type: 'INCREMENT' | 'RESET';
// }

// const counterReducer = (state: number, action: Action): number => {
// 	if (action.type === 'INCREMENT') return state + 1;
// 	if (action.type === 'RESET') return 0;
// 	return state;
// };

const Counter = () => {
	// const [value, setValue] = useState(0);

	// const [value, dispatch] = useReducer(counterReducer, 0);
	const { counter, increment, reset } = useCounterStore();

	return (
		<div>
			Counter ({counter})
			<button
				// onClick={() => setValue(value + 1)}
				// onClick={() => dispatch({ type: 'INCREMENT' })}
				onClick={() => increment()}
				className="btn btn-primary mx-1"
			>
				Increment
			</button>
			<button
				// onClick={() => setValue(0)}
				// onClick={() => dispatch({ type: 'RESET' })}
				onClick={() => reset()}
				className="btn btn-primary mx-1"
			>
				Reset
			</button>
		</div>
	);
};

export default Counter;
