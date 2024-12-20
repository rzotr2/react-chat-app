import { create } from 'zustand';
import { Message } from "@models";

type MessagesStoreState = {
    message: Message;
};

type MessagesStoreActions = {
    addMessage(newMessage: Message): void;
};

export const useCurrentMessageInput = create<MessagesStoreState & MessagesStoreActions>((set) => ({
    message: {} as Message,
    addMessage: (newMessage: Message) => {
        set(() => ({
            message: newMessage,
        }));
    },
}));
