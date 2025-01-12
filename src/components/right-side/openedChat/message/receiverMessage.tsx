import { Box, Flex, Text } from "@chakra-ui/react";
import { Message } from "@models";
import { Avatar } from "../../../ui/avatar.tsx";
import { MenuContent, MenuContextTrigger, MenuItem, MenuRoot } from "../../../ui/menu.tsx";
// import { useMessagesStore } from "@hooks";

export const ReceiverMessage = (message: Message) => {
    // const messagesStore = useMessagesStore((state) => state);
    // const setCurrentMessage = useMessagesStore((state) => state.setCurrentMessage);

    // const handleClick = (id: string) => {
        // const index = messagesStore.messages.findIndex((message) => message.id === id);
        // setCurrentMessage(messagesStore.messages[index]);
    // };

    return (
        <MenuRoot>
            <MenuContextTrigger w="full">
                <Flex width="100%" gap="2">
                    <Box bg="#4D4D4D"
                         rounded="4xl"
                         roundedBottomRight="md">
                        <Text
                            textAlign="left"
                            paddingY="3"
                            paddingX="3">
                            {message.text}
                        </Text>
                    </Box>
                    <Box alignSelf="flex-end">
                        <Avatar src="https://i.ibb.co/0jS3PNw/user-avatar.jpg" shape="full" size="xl" />
                    </Box>
                </Flex>
            </MenuContextTrigger>
            <MenuContent>
                {/*<MenuItem value="msg-edit" onClick={() => handleClick(message.id)}>Edit</MenuItem>*/}
                <MenuItem value="msg-delete">Delete</MenuItem>
            </MenuContent>
        </MenuRoot>
    );
};
