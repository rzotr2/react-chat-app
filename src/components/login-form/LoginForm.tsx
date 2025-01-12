import { Box, Button, Fieldset, Flex, Input, Link, Stack, Text } from "@chakra-ui/react";
import { Field } from "../ui/field.tsx";
import { useForm } from "react-hook-form";
import { Alert } from "../ui/alert.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth.ts";

export const LoginForm = () => {
    const { register, handleSubmit, getValues, resetField } = useForm();
    const [loginMessage, setLoginMessage] = useState<string[] | null>(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     // socket.on("userLoginResult", (response) => {
    //     //     if (response.result.userFound && response.result.passwordMatch) {
    //     //         setUserExists(["You are successfully logged in. Redirecting...", "success"]);
    //     //         localStorage.setItem("token", response.token);
    //     //         setCurrentUser(response.user);
    //     //         setTimeout(() => {
    //     //             navigate("/chat");
    //     //         }, 1500);
    //     //     } else {
    //     //         setUserExists(["Your login or password incorrect", "error"]);
    //     //         resetField('password');
    //     //     }
    //     // });
    //
    //     return () => {
    //         socket.off("userLoginResult");
    //     };
    // }, [setCurrentUser, navigate]);

    const userLogin = async () => {
        const userData = {
            email: getValues('email'),
            password: getValues('password')
        };

        const result = await loginUser(userData);

        if (result.success) {
            setLoginMessage(["You are successfully logged in. Redirecting...", "success"]);
            localStorage.setItem("token", result.response.token);
            setTimeout(() => {
                navigate("/chat");
                }, 1500);

        } else {
            setLoginMessage(["Your login or password incorrect", "error"]);
            resetField('password');
        }
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(userLogin)}>
                <Fieldset.Root size="lg" w="xl">
                    <Stack>
                        <Fieldset.Legend>Sign up</Fieldset.Legend>
                        <Fieldset.HelperText>
                            Please provide your login and password to access your account.
                        </Fieldset.HelperText>
                    </Stack>

                    <Fieldset.Content>
                        <Field label="Enter your email address"
                               required
                        >
                            <Input {...register("email")}/>
                        </Field>
                        <Field label="Password"
                               required
                        >
                            <Input {...register("password")}
                                   name="password"
                                   type="password"/>
                        </Field>
                    </Fieldset.Content>
                    <Flex alignItems="center" gap="5">
                        <Button type="submit" alignSelf="flex-start">
                            Login
                        </Button>
                        <Text>
                            Don`t have an account? Go to the{" "}
                            <Link
                                onClick={() => navigate('/')}
                                variant="underline"
                                colorPalette="teal"
                            >
                                register
                            </Link>{" "}
                            page
                        </Text>
                    </Flex>
                </Fieldset.Root>
            </form>
            {loginMessage && <Alert status={loginMessage[1] as "error" | "success"} title={loginMessage[0]} />}
        </Box>
    );
};
