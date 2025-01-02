import { ReactElement } from "react";
import { Routes, Route } from 'react-router-dom';

import MainPage from "./pages/MainPage.tsx";
import { SignUpPage } from "./pages/SignUpPage.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";
import {socket} from "./socket.ts";

const App = (): ReactElement => {
    socket.on('authorization-error', () => {
        console.log('User is not authorized');
    });

    socket.on('connection', () => console.log('Socket is connected'));

    return (
        <>
            <Routes>
                <Route path="/" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/chat" element={<MainPage />} />
            </Routes>
        </>
    );
};

export default App;
