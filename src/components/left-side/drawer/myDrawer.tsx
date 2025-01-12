import {
    DrawerBackdrop,
    DrawerBody, DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader, DrawerRoot,
    DrawerTitle,
    DrawerTrigger
} from "../../ui/drawer.tsx";
import { Box, Button, Link, Text } from "@chakra-ui/react";
import { VscThreeBars } from "react-icons/vsc";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { ColorModeButton } from "../../ui/color-mode.tsx";
import { UserInfo } from "../../reusable/userInfo.tsx";

export const MyDrawer = () => {
    return (
        <DrawerRoot placement="start">
            <DrawerBackdrop />
            <DrawerTrigger asChild>
                <Button variant="outline">
                    <Link fontSize="x-large">
                        <VscThreeBars></VscThreeBars>
                    </Link>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <Box>
                        <UserInfo></UserInfo>
                    </Box>
                    <Box marginTop="4" fontSize="1.2rem">
                        <Box padding="3" display="flex" gap="3" alignItems="center">
                            <FaUserGroup />
                            <Text>New group</Text>
                        </Box>
                        <Box padding="3" display="flex" gap="3" alignItems="center">
                            <IoMdContact />
                            <Text>Contacts</Text>
                        </Box>
                        <Box padding="3" display="flex" gap="3" alignItems="center">
                            <IoCallOutline />
                            <Text>Calls</Text>
                        </Box>
                        <Box padding="3" display="flex" gap="3" alignItems="center">
                            <GrFavorite />
                            <Text>Saved messages</Text>
                        </Box>
                        <Box padding="3" display="flex" gap="3" alignItems="center">
                            <IoSettingsOutline/>
                            <Text>Settings</Text>
                        </Box>
                    </Box>
                </DrawerBody>
                <DrawerFooter>
                    <ColorModeButton>Change color theme</ColorModeButton>
                </DrawerFooter>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    );
};
