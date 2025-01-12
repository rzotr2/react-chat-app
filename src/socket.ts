import { io, Socket } from 'socket.io-client';

const BASE_URL = 'http://192.168.2.123:8080';

export const socket: Socket = io(BASE_URL, {
    transports: ["websocket"],
    autoConnect: false,
    auth: {
        token: localStorage.getItem('token'),
    },
});
