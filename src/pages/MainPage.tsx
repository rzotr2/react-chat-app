import { ReactElement } from "react";

import { Box, Stack } from "@chakra-ui/react";
import { LeftSide, RightSide } from "@components";

const MainPage = (): ReactElement => {
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
