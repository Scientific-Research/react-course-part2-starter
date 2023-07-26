import { ReactNode, useReducer } from 'react';
import AuthContext from './authContext';

interface LoginAction {
	type: 'LOGIN';
	username: string;
}
interface LogoutAction {
	type: 'LOGOUT';
	// password: string;
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
	if (action.type === 'LOGIN') return action.username;
	// if (action.type === 'LOGOUT') return action.password;
	if (action.type === 'LOGOUT') return '';

	return state;
};

interface Props {
	children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
	const [user, dispatch] = useReducer(authReducer, '');

	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
