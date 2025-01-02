import {Badge, Box, Button, Fieldset, Flex, Input, Link, Stack, Text} from "@chakra-ui/react";
import { Field } from "../ui/field.tsx";
import { NativeSelectField, NativeSelectRoot } from "../ui/native-select.tsx";
import { useForm } from "react-hook-form";
import { User } from "@models";
import { Alert } from "../ui/alert.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from '../../socket.ts';

export const SignUpForm = () => {
    const { register, watch, handleSubmit, getValues } = useForm();

    const [userExists, setUserExists] = useState<string[] | null>(null);
    const navigate = useNavigate();

    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const phoneNumberRegExp = /^\+?([0-9]{1,9})?[-. ]?(\(?[0-9]{1,4}\)?)?[-. ]?([0-9]{1,4})[-. ]?([0-9]{1,4})[-. ]?([0-9]{1,9})$/;

    const watchEmailField: string = watch('email');
    const watchPasswordField: string = watch('password');
    const watchRepeatPasswordField: string = watch('repeatPassword');
    const watchPhoneNumberField: string = watch('phoneNumber');

    const invalidEmail: boolean = watchEmailField ? !emailRegExp.test(watchEmailField) : false;
    const invalidPassword: boolean = watchPasswordField ? !passwordRegExp.test(watchPasswordField) : false;
    const invalidRepeatPassword: boolean = watchRepeatPasswordField ? watchRepeatPasswordField !== watchPasswordField : false;
    const invalidPhoneNumber: boolean = watchPhoneNumberField ? !phoneNumberRegExp.test(watchPhoneNumberField) : false;

    const addUser = () => {
        const user: User = {
            username: getValues('username'),
            phoneNumber: getValues('phoneNumber'),
            email: getValues('email'),
            password: getValues('password'),
            country: getValues('country'),
            isLoggedIn: false,
            isAdmin: false,
            gender: getValues('gender')
        };

        socket.emit("register", user);
        console.log('user sent to server');
        socket.on("userRegistered", (result: boolean) => {
            if (result) {
                setUserExists(['You were successfully registered. Please login in the next page. Redirecting...', 'success']);
                setTimeout(() => {
                    navigate('/login');
                }, 2500);
            } else {
                setUserExists(['User with the same username, email or phone number already exists. Try again', "error"]);
            }
        });
    };

    socket.on("connect", () => {
        console.log(`[client] Connected with ID: ${socket.id}`);
    });

    return (
        <Box>
            <form onSubmit={handleSubmit(addUser)}>
                <Fieldset.Root size="lg" w="xl">
                    <Stack>
                        <Fieldset.Legend>Sign up</Fieldset.Legend>
                        <Fieldset.HelperText>
                            Please provide your user details below.
                        </Fieldset.HelperText>
                    </Stack>

                    <Fieldset.Content>
                        <Field label="Email adress"
                               required
                               invalid={invalidEmail}
                        >
                            <Input {...register("email")}
                                name="email"
                                type="email"/>
                            <Text color="#F87171">
                                {invalidEmail ? 'Enter a valid email address.' : null}
                            </Text>
                        </Field>

                        <Field label="Username" required>
                            <Input {...register("username", {required: true})}
                                name="username" />
                        </Field>

                        <Field label="Password"
                               required
                               invalid={invalidPassword}
                        >
                            <Input {...register("password")}
                                name="password"
                                type="password"/>
                            <Text color="#F87171">
                                {invalidPassword ? 'Your password must contain at least 8 characters. They must be uppercase and lowercase letters and numbers.' : null}
                            </Text>
                        </Field>

                        <Field label="Repeat your password"
                               required
                               invalid={invalidRepeatPassword}
                        >
                            <Input {...register("repeatPassword")}
                                   name="repeatPassword"
                                   type="password"/>
                            <Text color="#F87171">
                                {invalidRepeatPassword ? 'Your passwords are not equal.' : null}
                            </Text>
                        </Field>

                        <Field label="Country"
                               optionalText={
                                   <Badge size="xs" variant="surface">
                                       Optional
                                   </Badge>
                               }
                        >
                            <NativeSelectRoot>
                                <NativeSelectField
                                    {...register('country')}
                                    name="country"
                                    items={[
                                        "",
                                        "Argentina (AR) (+54)",
                                        "Australia (AU) (+61)",
                                        "Bangladesh (BD) (+880)",
                                        "Bahrain (BH) (+973)",
                                        "Brazil (BR) (+55)",
                                        "Canada (CA) (+1)",
                                        "Chile (CL) (+56)",
                                        "China (CN) (+86)",
                                        "Colombia (CO) (+57)",
                                        "Denmark (DK) (+45)",
                                        "Egypt (EG) (+20)",
                                        "Finland (FI) (+358)",
                                        "France (FR) (+33)",
                                        "Germany (DE) (+49)",
                                        "Ghana (GH) (+233)",
                                        "Greece (GR) (+30)",
                                        "Hungary (HU) (+36)",
                                        "India (IN) (+91)",
                                        "Indonesia (ID) (+62)",
                                        "Iran (IR) (+98)",
                                        "Iraq (IQ) (+964)",
                                        "Israel (IL) (+972)",
                                        "Italy (IT) (+39)",
                                        "Japan (JP) (+81)",
                                        "Jordan (JO) (+962)",
                                        "Kenya (KE) (+254)",
                                        "Kuwait (KW) (+965)",
                                        "Lebanon (LB) (+961)",
                                        "Malaysia (MY) (+60)",
                                        "Mexico (MX) (+52)",
                                        "Morocco (MA) (+212)",
                                        "New Zealand (NZ) (+64)",
                                        "Nigeria (NG) (+234)",
                                        "Norway (NO) (+47)",
                                        "Pakistan (PK) (+92)",
                                        "Peru (PE) (+51)",
                                        "Philippines (PH) (+63)",
                                        "Poland (PL) (+48)",
                                        "Portugal (PT) (+351)",
                                        "Qatar (QA) (+974)",
                                        "Russia (RU) (+7)",
                                        "Saudi Arabia (SA) (+966)",
                                        "Singapore (SG) (+65)",
                                        "South Africa (ZA) (+27)",
                                        "South Korea (KR) (+82)",
                                        "Sri Lanka (LK) (+94)",
                                        "Sweden (SE) (+46)",
                                        "Thailand (TH) (+66)",
                                        "Tunisia (TN) (+216)",
                                        "Turkey (TR) (+90)",
                                        "Ukraine (UA) (+380)",
                                        "United Arab Emirates (AE) (+971)",
                                        "United Kingdom (UK) (+44)",
                                        "United States (US) (+1)",
                                        "Vietnam (VN) (+84)"
                                    ]}
                                />
                            </NativeSelectRoot>
                        </Field>

                        <Field label="Enter your phone number"
                               required
                               invalid={invalidPhoneNumber}
                        >
                            <Input {...register("phoneNumber")}
                                   name="phoneNumber"
                                   type="tel"/>
                            <Text color="#F87171">
                                {invalidPhoneNumber ? 'Enter a valid phone number.' : null}
                            </Text>
                        </Field>
                        <Field label="Your gender:" required>
                            <NativeSelectRoot>
                                <NativeSelectField
                                    {...register("gender")}
                                    name="gender"
                                    items={[
                                        "Male",
                                        "Female",
                                        "Other",
                                    ]}
                                />
                            </NativeSelectRoot>
                        </Field>
                    </Fieldset.Content>
                    <Flex alignItems="center" gap="5">
                        <Button type="submit" alignSelf="flex-start">
                            Sign Up
                        </Button>
                        <Text>
                            Already have an account? Go to the{" "}
                            <Link
                                onClick={() => navigate('/login')}
                                variant="underline"
                                colorPalette="teal"
                            >
                                login
                            </Link>{" "}
                            page
                        </Text>
                    </Flex>
                </Fieldset.Root>
            </form>
            {userExists && <Alert title={userExists[0]} status={userExists[1] as "error" | "success"} />}
        </Box>
    );
};
