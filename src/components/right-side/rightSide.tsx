import { useForm } from "react-hook-form";
import { useEffect } from "react";

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
import { v4 as uuidv4 } from 'uuid';

export const RightSide = () => {
    const { handleSubmit, resetField, register, getValues, setValue, setFocus } = useForm<Message>();
    const addMessage = useMessagesStore(state => state.addMessage);
    const updateMessage = useMessagesStore(state => state.updateMessage);
    const messagesStore = useMessagesStore(state => state.messages);
    const currentMessage = useMessagesStore(state => state.currentMessage);
    const onSubmit = handleSubmit(() => {
        const newMessage = {
            text: getValues('text'),
            author: 'me',
            timeStamp: Date().toLocaleString(),
            id: uuidv4()
        };

        const index = messagesStore.findIndex((message) => {
            return message.id === currentMessage.id;
        });

        if (index >= 0) {
            updateMessage(newMessage, index);
        } else if (index === -1) {
            addMessage(newMessage);
            console.log(index);
        }

        resetField('text');
    });

    useEffect(() => {
        setValue("text", currentMessage.text);
        setFocus("text");
    }, [currentMessage, setValue, setFocus]);

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
            <Box overflowY="scroll" height="92%">
                <OpenedChat></OpenedChat>
            </Box>
            <Box h="auto" paddingX={3}>
                <Flex alignItems="center" flex="1">
                    <Group paddingY="1" flexGrow="1" fontSize="1.5rem">
                        <IconButton variant="ghost">
                            <FaPaperclip />
                        </IconButton>
                        <Box width="100%">
                            <form onSubmit={onSubmit}>
                                <Input {...register('text')}
                                       id="inputTextField"
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
