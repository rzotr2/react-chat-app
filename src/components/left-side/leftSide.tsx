import {ReactElement} from "react";

import {Input, Flex, Box, Stack} from "@chakra-ui/react";
import {ChatList} from "./chatList/chatList.tsx";
import {MyDrawer} from "./drawer/myDrawer.tsx";

export const LeftSide = (): ReactElement => {
    return (
        <Stack direction="column" h="100%">
            <Flex align="center" gap="4" p="2" h="7%">
                <MyDrawer></MyDrawer>
                <Input rounded="full" placeholder="Search chats"></Input>
            </Flex>
            <Box overflowY="scroll" h="93%">
                <ChatList />
            </Box>
        </Stack>
    );
};
