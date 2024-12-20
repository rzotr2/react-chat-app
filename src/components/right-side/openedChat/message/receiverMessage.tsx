import { Box, Flex, Text } from "@chakra-ui/react";
import { Message } from "@models";
import { Avatar } from "../../../ui/avatar.tsx";
import { MenuContent, MenuContextTrigger, MenuItem, MenuRoot } from "../../../ui/menu.tsx";

export const ReceiverMessage = ({text}: Message) => {
    return (
        <MenuRoot>
            <MenuContextTrigger w="full">
                <Flex width="100%" gap="2">
                    <Box bg="#4D4D4D"
                         rounded="4xl"
                         roundedBottomRight="md">
                        <Text
                            paddingY="2"
                            paddingX="5">{text}</Text>
                    </Box>
                    <Box alignSelf="flex-end">
                        <Avatar src="https://i.ibb.co/0jS3PNw/user-avatar.jpg" shape="full" size="xl" />
                    </Box>
                </Flex>
            </MenuContextTrigger>
            <MenuContent>
                <MenuItem value="msg-edit">Edit</MenuItem>
                <MenuItem value="msg-delete">Delete</MenuItem>
            </MenuContent>
        </MenuRoot>
    );
};
