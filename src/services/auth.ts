import {LoginPayload, ServerResponse, User} from "@models";

const BASE_URL = 'http://192.168.2.123:8080';

export const registerUser = async (payload: User) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "charset": "utf-8"
            },
            body: JSON.stringify(payload)
        }).then(response => response.json());

        return {
            response,
            success: true,
        };
    } catch (error) {
        return {
            error: `Login error: ${(error as Error).message}`,
            success: false,
        };
    }
};

export const loginUser = async (payload: LoginPayload): Promise<ServerResponse<{ token: string }>> => {
    try {
        const response: {token: string} = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "charset": "utf-8"
            },
            body: JSON.stringify(payload)
        }).then(res => res.json());

        return {
            response,
            success: true,
        };
    } catch (error) {
        return {
            error: `Login error: ${(error as Error).message}`,
            success: false,
        };
    }
};

export const getOneUser = async (): Promise<ServerResponse<{ user: User }>> => {
    try {
        const response: {user: User} = await fetch(`${BASE_URL}/users/me`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token'),
                "Content-Type": "application/json",
                "charset": "utf-8"
            },
        }).then(res => res.json());

        return {
            response,
            success: true,
        };
    } catch (err) {
        return {
            error: `Login error: ${(err as Error).message}`,
            success: false,
        };
    }
};
