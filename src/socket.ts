import {io, Socket} from 'socket.io-client';

const BASE_URL = 'http://localhost:8080';

export const socket: Socket = io(BASE_URL, {
    auth: {
        token: localStorage.getItem('token'),
    }
});
