import { ReactElement } from "react";

import { Box, Text } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar.tsx";


export const UserInfo = (): ReactElement => {
    return (
        <Box display="flex" gap="3">
            <Box>
                <Avatar src="https://i.ibb.co/0jS3PNw/user-avatar.jpg" shape="full" size="xl" />
            </Box>
            <Box>
                <Text fontWeight="bold" fontSize="md" marginBottom="3px">User Name</Text>
                <Text fontWeight="200" lineClamp="2">You can call me Soul Goodman</Text>
            </Box>
        </Box>
    );
};
