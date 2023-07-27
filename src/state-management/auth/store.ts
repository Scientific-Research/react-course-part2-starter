import { create } from 'zustand';

interface UserStore {
	user: string;
	login: (username: string) => void;
	logout: () => void;
}

const useUserStore = create<UserStore>((set) => ({
	user: '',
	// login: () => set(() => ({ user: 'Maxi.Paxi' })),
	login: (username) => set(() => ({ user: username })),
	logout: () => set(() => ({ user: '' })),
}));

export default useUserStore;
