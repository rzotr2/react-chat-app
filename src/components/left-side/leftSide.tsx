import { ReactElement } from "react";

import { Input, Flex, Box, Stack } from "@chakra-ui/react";
import { ChatList } from "./chatList/chatList.tsx";
import { MyDrawer } from "./drawer/myDrawer.tsx";

export const LeftSide = (): ReactElement => {
    return (
        <Stack direction="column" h="100%">
            <Flex align="center" padding="2">
                <MyDrawer></MyDrawer>
                <Input rounded="full" placeholder="Search chats"></Input>
            </Flex>
            <Box overflowY="auto">
                <ChatList />
            </Box>
        </Stack>
    );
};
