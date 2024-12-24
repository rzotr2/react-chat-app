import { ReactElement } from "react";
import { Routes, Route } from 'react-router-dom';

import MainPage from "./pages/MainPage.tsx";
import {SignUpPage} from "./pages/SignUpPage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";

const App = (): ReactElement => {
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
