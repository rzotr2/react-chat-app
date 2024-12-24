import { AbsoluteCenter, Box } from "@chakra-ui/react";
import {SignUpForm} from "../components/signup-form/SignUpForm.tsx";

export const SignUpPage = () => {

    return (
        <Box position="relative" h="100vh">
            <AbsoluteCenter>
                <SignUpForm />
            </AbsoluteCenter>
        </Box>
    );
};
