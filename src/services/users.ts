const BASE_URL = 'http://localhost:8080';

export const getAllUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        return await response.json();
    } catch (error) {
        return `Error fetching users: ' ${error}`;
    }
};

export const getOneUser = async (id: string) => {
    try {
        const response = await fetch(`${BASE_URL}/users/${id}`);
        return await response.json();
    } catch (error) {
        return `Error fetching message: ' ${error}`;
    }
};
