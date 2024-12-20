import { useForm } from "react-hook-form";


import { Box, Flex, Group, Input, IconButton, Stack } from "@chakra-ui/react";
import { UserInfo } from "../reusable/userInfo.tsx";
import { OpenedChat } from "./openedChat/openedChat.tsx";
import { FaSearch } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { FaPaperclip } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import { MdKeyboardVoice } from "react-icons/md";
import { useMessagesStore } from "@hooks";
import { Message } from "@models";
import nextId from "react-id-generator";
import {useCurrentMessageInput} from "../../hooks/current-message-input/currentMessageInput.ts";

export const RightSide = () => {
    const { handleSubmit, resetField, register, getValues } = useForm<Message>();
    const addMessage = useMessagesStore(state => state.addMessage);
    const onSubmit = handleSubmit(() => {
        const newMessage = {
            text: getValues('text'),
            author: 'me',
            timeStamp: Date().toLocaleString(),
            id: nextId('msg-')
        };

        addMessage(newMessage);
        resetField('text');
    });

    return (
        <Stack direction="column" h="100%">
            <Box h="10%">
                <Flex align="center"
                      justifyContent="space-between"
                      flex="1"
                      p="1"
                      border="solid"
                      borderWidth="0.5px"
                      borderColor="gray">
                    <Flex>
                        <UserInfo></UserInfo>
                    </Flex>
                    <Flex>
                        <Box>
                            <IconButton variant="surface"><FaSearch /></IconButton>
                        </Box>
                        <Box>
                            <IconButton variant="surface"><HiDotsVertical /></IconButton>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <Box h="82%" overflowY="scroll">
                <OpenedChat></OpenedChat>
            </Box>
            <Box h="8%">
                <Flex alignItems="center" flex="1">
                    <Group paddingY="1" flexGrow="1" fontSize="1.5rem">
                        <IconButton variant="ghost">
                            <FaPaperclip />
                        </IconButton>
                        <Box width="100%">
                            <form onSubmit={onSubmit}>
                                <Input {...register('text')}
                                       value={useCurrentMessageInput.getState().text}
                                       placeholder="Write a message"
                                       border="none"
                                       size="lg"
                                       _focus={{boxShadow: 'none', border: 'none', outline: 'none'}}
                                />
                            </form>
                        </Box>
                    </Group>
                    <Group>
                        <IconButton variant="ghost">
                            <FaRegFaceSmile/>
                        </IconButton>
                        <IconButton variant="ghost">
                            <MdKeyboardVoice/>
                        </IconButton>
                    </Group>
                </Flex>
            </Box>
        </Stack>
    );
};
