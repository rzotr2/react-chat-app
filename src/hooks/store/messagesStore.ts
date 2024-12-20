import { create } from 'zustand';
import { Message } from "@models";

type MessagesStoreState = {
    messages: Message[];
};

type MessagesStoreActions = {
    addMessage(newMessage: Message): void;
};

export const useMessagesStore = create<MessagesStoreState & MessagesStoreActions>((set) => ({
    messages: [] as Message[],
    addMessage: (newMessage: Message) => {
        set((state) => ({
            messages: [...state.messages, newMessage],
        }));
    },
}));
