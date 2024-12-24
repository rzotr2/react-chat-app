import { Box, Button, Fieldset, Input, Stack } from "@chakra-ui/react";
import { Field } from "../ui/field.tsx";
import { useForm } from "react-hook-form";
import { User } from "@models";
import { useUsersStore } from "../../hooks/store/usersStore.ts";
import { Alert } from "../ui/alert.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const { register, handleSubmit, getValues, resetField } = useForm();
    const users: User[] = useUsersStore(state => state.users);
    const [userExists, setUserExists] = useState<string[] | null>(null);
    const navigate = useNavigate();

    const onSubmit = () => {
        const usernameOrEmail = getValues('email/username');
        const password = getValues('password');

        const user = users.find((user) => {
            return (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password;
        });

        if (user) {
            setUserExists(["You are successfully logged in, redirecting in 3s", "success"]);

            setTimeout(() => {
                navigate("/chat");
            }, 3000);
        } else {
            setUserExists(["Your login or password incorrect", "error"]);
            resetField("email/username");
            resetField("password");
        }
    };

    return (
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Button type="submit" alignSelf="flex-start">
                        Log in
                    </Button>
                </Fieldset.Root>
            </form>
            {userExists && <Alert status={userExists[1] as "error" | "success"} title={userExists[0]} />}
        </Box>
    );
};
