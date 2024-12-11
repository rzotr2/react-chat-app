import { Box, Flex, Text } from "@chakra-ui/react";
import { Message } from "@models";
import { Avatar } from "../../../ui/avatar.tsx";

export const ReceiverMessage = ({messageText}: Message) => {
    return (
        <Flex width="100%" gap="2">
            <Box bg="#4D4D4D"
                 rounded="4xl"
                 roundedBottomRight="md">
                <Text
                    paddingY="2"
                    paddingX="5">{messageText}</Text>
            </Box>
            <Box alignSelf="flex-end">
                <Avatar src="https://i.ibb.co/0jS3PNw/user-avatar.jpg" shape="full" size="xl" />
            </Box>
        </Flex>
    );
};
