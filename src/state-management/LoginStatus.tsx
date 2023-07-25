import { useContext } from 'react';
import authContext from './contexts/authContext';

const LoginStatus = () => {
	// const [user, setUser] = useState('');
	// const [user, dispatch] = useReducer(authReducer, '');
	const { user, dispatch } = useContext(authContext);

	if (user)
		return (
			<>
				<div>
					<span className="mx-2">{user}</span>
					<a
						onClick={
							() => dispatch({ type: 'LOGOUT', password: '2132' })
							// dispatch({ type: 'LOGOUT' })
						}
						href="#"
					>
						Logout
					</a>
				</div>
			</>
		);
	return (
		<div>
			<a
				onClick={() =>
					dispatch({ type: 'LOGIN', username: 'Maxi.Paxi' })
				}
				href="#"
			>
				Login
			</a>
		</div>
	);
};

export default LoginStatus;
