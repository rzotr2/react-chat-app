import { create } from 'zustand';
import { Message } from "@models";

type MessagesStoreState = {
    messages: Message[];
    currentMessage: Message;
};

type MessagesStoreActions = {
    setMessages(messages: Message[]): void;
    addMessage(newMessage: Message): void;
    setCurrentMessage(newMessage: Message): void;
    // updateMessage(newMessage: Message, index: number): void;
    // deleteMessage(id: string): void;
};

export const useMessagesStore = create<MessagesStoreState & MessagesStoreActions>((set) => ({
    messages: [] as Message[],
    currentMessage: {} as Message,

    setMessages: (newMessages: Message[])=> {
        set({messages: newMessages});
    },

    addMessage: (newMessage: Message) => {
        set((state) => ({
            messages: [...state.messages, newMessage],
        }));
    },
    setCurrentMessage: (newMessage: Message) => {
        set(() => ({currentMessage: newMessage}));
    },
    // updateMessage: (newMessage, index) => {
    //     set((state) => ({
    //         messages: state.messages.map((message, currentIndex) =>
    //             currentIndex === index ? newMessage : message
    //         )
    //     }));
    // },
    // deleteMessage: (id: string)=> {
    //     set((state) => {
    //         const updatedMessages = state.messages.filter((m) => m.id !== id);
    //         return {messages: updatedMessages};
    //     });
    // }
}));
