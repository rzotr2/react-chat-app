import { Flex, Box } from "@chakra-ui/react";
import { SenderMessage } from "./message/senderMessage.tsx";
import { ReceiverMessage } from "./message/receiverMessage.tsx";
import { Message } from "@models";
import { useEffect, useRef } from "react";
import { socket } from "../../../socket.ts";
import { useMessagesStore, useUsersStore } from "@hooks";
import { MdErrorOutline } from "react-icons/md";

export const OpenedChat = () => {
    const messages = useMessagesStore(state => state.messages);
    const setMessages = useMessagesStore.getState().setMessages;
    const usersStore = useUsersStore.getState();

    useEffect(() => {
        console.log('getAllMessages');

        socket.emit("getAllMessages");
    }, []);

    const messageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messageRef.current) {
            messageRef.current.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                });
        }
    }, [messages]);

    socket.on("allMessagesSent", (data: Message[]) => {
        console.log(data);
        setMessages(data);
    });

    return (
        <Flex direction="column" justifyContent="flex-end" minHeight="100%" paddingX="4" ref={messageRef}>
            {messages.map((message, index) => {
                if (message.author === usersStore.currentUser?.username) {
                    return (
                        <Box key={index}
                             display="flex"
                             alignItems="center"
                             alignSelf="flex-end"
                             maxWidth="45%"
                             paddingBottom="3"
                        >
                            {!message.delivered &&
                                <Box fontSize="1.5rem" color="red" marginRight="5px">
                                    <MdErrorOutline />
                                </Box>
                            }
                            <ReceiverMessage text={message.text}
                                             author={message.author}
                                             to={message.to}
                                             timestamp={message.timestamp}
                                             delivered={message.delivered}
                                             received={message.received}>
                            </ReceiverMessage>
                        </Box>
                    );
                } else {
                    return (
                        <Box key={index}
                             display="flex"
                             alignItems="center"
                             alignSelf="flex-start"
                             maxWidth="45%"
                             paddingBottom="3"
                        >
                            <SenderMessage text={message.text}
                                           author={message.author}
                                           to={message.to}
                                           timestamp={message.timestamp}
                                           delivered={message.delivered}
                                           received={message.received}>
                            </SenderMessage>
                            {!message.delivered &&
                                <Box fontSize="1.5rem" color="red" marginLeft="5px">
                                    <MdErrorOutline />
                                </Box>
                            }
                        </Box>
                    );
                }
            })}
        </Flex>
    );
};
