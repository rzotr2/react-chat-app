import {Box, Button, Fieldset, Flex, Input, Link, Stack, Text} from "@chakra-ui/react";
import { Field } from "../ui/field.tsx";
import { useForm } from "react-hook-form";
import { Alert } from "../ui/alert.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../../socket.ts";

export const LoginForm = () => {
    const { register, handleSubmit, getValues, resetField } = useForm();
    const [userExists, setUserExists] = useState<string[] | null>(null);
    const navigate = useNavigate();

    const userLogin = () => {
        const userData = {
            username: getValues('email/username'),
            email: getValues('email/username'),
            password: getValues('password')
        };

        socket.on("connection", () => {
            console.log('[client] Connected]');
        });

        socket.emit("login", userData);
        socket.on("userLoginResult", (response) => {
            if (response.userFound && response.passwordMatch) {
                setUserExists(["You are successfully logged in. Redirecting...", "success"]);
                localStorage.setItem("token", response.token);
                setTimeout(() => {
                    navigate("/chat");
                }, 1500);
            } else {
                setUserExists(["Your login or password incorrect", "error"]);
                resetField('email/username');
                resetField('password');
            }
        });



        // const user = users.find((user) => {
        //     return (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password;
        // });
        //
        // if (user) {
        //     setUserExists(["You are successfully logged in, redirecting in 3s", "success"]);
        //
        //     setTimeout(() => {
        //         navigate("/chat");
        //     }, 3000);
        // } else {
        //     setUserExists(["Your login or password incorrect", "error"]);
        //     resetField("email/username");
        //     resetField("password");
        // }
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
                        <Field label="Enter your email adress or username"
                               required
                        >
                            <Input {...register("email/username")}/>
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
            {userExists && <Alert status={userExists[1] as "error" | "success"} title={userExists[0]} />}
        </Box>
    );
};
