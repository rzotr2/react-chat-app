import {ReactElement, useEffect} from "react";
import { Box, Stack } from "@chakra-ui/react";
import { LeftSide, RightSide } from "@components";
import { socket } from "../socket.ts";
import { useUsersStore } from "@hooks";
import {getOneUser} from "../services/auth.ts";

const MainPage = (): ReactElement => {
    const setCurrentUser = useUsersStore(state => state.setCurrentUser);

    useEffect(() => {
        (async () => {
            const result = await getOneUser();

            if (result.success) {
                setCurrentUser(result.response.user);

                socket.connect();
            }
        })();

        return () => {
            socket.disconnect();
        };
    }, [setCurrentUser]);

    return (
        <Stack direction={{ md: "row" }}
        >
            <Box w="30%" h='100vh'>
                <LeftSide />
            </Box>
            <Box w="70%" h='100vh'>
                <RightSide />
            </Box>
        </Stack>
    );
};

export default MainPage;
