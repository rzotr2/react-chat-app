import { Flex, Box } from "@chakra-ui/react";
import { SenderMessage } from "./message/senderMessage.tsx";
import { ReceiverMessage } from "./message/receiverMessage.tsx";
import { Message } from "@models";
import { useEffect, useState } from "react";
import {socket} from "../../../socket.ts";

export const OpenedChat = () => {
    const [messages, setMessages] = useState<Message[] | null>(null);

    useEffect(() => {
        socket.emit("getAllMessages");
    }, []);

    socket.on("allMessagesSent", (data: Message[]) => {
        console.log(localStorage.getItem('token'));
        setMessages(data);
    });

    // socket.emit("sendMessage", (message: Message) => {
    //
    // });

    return (
        <Flex direction="column" justifyContent="flex-end" minHeight="100%" paddingX="4">
            {messages?.map((message, index) => {
                if (message.author === 'me') {
                    return (
                        <Box key={index}
                             alignSelf="flex-end"
                             maxWidth="45%"
                             paddingBottom="3"
                        >
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
                             alignSelf="flex-start"
                             maxWidth="45%">
                            <SenderMessage text={message.text}
                                           author={message.author}
                                           to={message.to}
                                           timestamp={message.timestamp}
                                           delivered={message.delivered}
                                           received={message.received}>
                            </SenderMessage>
                        </Box>
                    );
                }
            })}
        </Flex>
    );
};
