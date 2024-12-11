import { ReactElement } from "react";

import { Box, Stack } from "@chakra-ui/react";
import { LeftSide, RightSide } from "@components";

const App = (): ReactElement => {
    return (
        <Stack direction={{ md: "row" }} gap="0">
            <Box w="30%" h='calc(100vh)'>
                <LeftSide />
            </Box>
            <Box w="70%" h='calc(100vh)'>
                <RightSide />
            </Box>
        </Stack>
    )
};

export default App;
