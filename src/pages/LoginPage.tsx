import { AbsoluteCenter, Box } from "@chakra-ui/react";
import { LoginForm } from "../components/login-form/LoginForm.tsx";

export const LoginPage = () => {

    return (
        <Box position="relative" h="100vh">
            <AbsoluteCenter>
                <LoginForm />
            </AbsoluteCenter>
        </Box>
    );
};
