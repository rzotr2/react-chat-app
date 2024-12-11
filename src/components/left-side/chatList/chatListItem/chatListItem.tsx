import {ReactElement} from "react";

import {Box, Grid, Text, GridItem} from "@chakra-ui/react";
import {UserInfo} from "../../../reusable/userInfo.tsx";

export const ChatListItem = (): ReactElement => {
    return (
        <Box>
            <Grid
                templateColumns="repeat(6, 1fr)"
                gap="3"
                borderWidth="0.5px"
                borderColor="gray"
                padding="1"
                height="100%"
                alignItems="stretch"
            >
                <GridItem colSpan={5}>
                    <UserInfo />
                </GridItem>
                <GridItem
                    colSpan={1}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    height="100%"
                    alignItems="flex-end"
                >
                    <Box>
                        <Text
                            fontWeight="100"
                            whiteSpace="nowrap"
                        >
                            12:22 PM
                        </Text>
                    </Box>
                    <Box
                        bg="gray"
                        h="6"
                        w="7"
                        textAlign="center"
                        rounded="full"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        marginTop="auto"
                    >
                        <Text fontSize="0.9rem">2</Text>
                    </Box>
                </GridItem>
            </Grid>
        </Box>

    );
};
