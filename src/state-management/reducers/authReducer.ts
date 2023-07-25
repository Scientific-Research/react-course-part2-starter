interface LoginAction {
	type: 'LOGIN';
	username: string;
}
interface LogoutAction {
	type: 'LOGOUT';
	password: string;
}

type authAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: authAction): string => {
	if (action.type === 'LOGIN') return action.username;
	if (action.type === 'LOGOUT') return action.password;
	return state;
};

export default authReducer;
