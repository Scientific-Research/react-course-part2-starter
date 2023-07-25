interface Action {
	type: 'LOGIN' | 'LOGOUT';
}

const authReducer = (state: string, action: Action): string => {
	if (action.type === 'LOGIN') return 'Maxi.Paxi';
	if (action.type === 'LOGOUT') return '';
	return state;
};

export default authReducer;
