import { create } from 'zustand';
import { User } from "@models";

type UsersStoreState = {
    users: User[];
    currentUser: User;
};

type UsersStoreActions = {
    addUser(newUser: User): void;
    setCurrentUser(user: User): void;
};

export const useUsersStore = create<UsersStoreState & UsersStoreActions>((set) => ({
    users: [] as User[],
    currentUser: {} as User,

    addUser: (newUser: User) => {
        set((state: UsersStoreState & UsersStoreActions) => ({
            users: [...state.users, newUser]
        }));
    },
    setCurrentUser: (user: User) => {
        console.log(user);
    },
}));
