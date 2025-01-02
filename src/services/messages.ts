const BASE_URL = 'http://localhost:8080';

export const getAllMessages = async () => {
    try {
        const response = await fetch(`${BASE_URL}/messages`);
        return await response.json();
    } catch (error) {
        return `Error fetching messages: ' ${error}`;
    }
};

export const getOneMessage = async (id: string) => {
    try {
        const response = await fetch(`${BASE_URL}/messages/${id}`);
        return await response.json();
    } catch (error) {
        return `Error fetching message: ' ${error}`;
    }
};
