import useUserStore from './store';

const LoginStatus = () => {
	// const [user, setUser] = useState('');
	// const [user, dispatch] = useReducer(authReducer, '');
	//  const { user, dispatch } = useContext(AuthContext);
	// const { user, dispatch } = useAuth();
	const { user, login, logout } = useUserStore();
	if (user)
		return (
			<>
				<div>
					<span className="mx-2">{user}</span>
					<a
						onClick={() => logout()}
						// () => dispatch({ type: 'LOGOUT', password: '2132' })
						// () => dispatch({ type: 'LOGOUT' })
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
				onClick={() => login('Maxi.Paxi')}
				// dispatch({ type: 'LOGIN', username: 'Maxi.Paxi' })
				href="#"
			>
				Login
			</a>
		</div>
	);
};

export default LoginStatus;
