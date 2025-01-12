import { create } from 'zustand';
import { User } from "@models";

type UsersStoreState = {
    currentUser: User;
};

type UsersStoreActions = {
    setCurrentUser(user: User): void;
};

export const useUsersStore = create<UsersStoreState & UsersStoreActions>((set) => ({
    currentUser: {} as User,

    setCurrentUser: (user: User) => {
        set({currentUser: user});
    },
}));
