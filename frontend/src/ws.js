import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://mansi-chatapp.onrender.com');
    // return io('http://localhost:4600');
}
