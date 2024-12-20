import { Flex, Box } from "@chakra-ui/react";
import { SenderMessage } from "./message/senderMessage.tsx";
import { ReceiverMessage } from "./message/receiverMessage.tsx";
import { useMessagesStore } from "@hooks";

export const OpenedChat = () => {
    const messages = useMessagesStore((state) => state.messages);

    return (
        <Flex direction="column" justifyContent="flex-end" h="100%" paddingX="4">
            {messages.map((message, index) => {
                if (message.author === 'me') {
                    return (
                        <Box key={index}
                             alignSelf="flex-end"
                             maxWidth="45%"
                             paddingBottom="3"
                        >
                            <ReceiverMessage text={message.text}
                                             author={message.author}
                                             recipient={message.recipient}
                                             timeStamp={message.timeStamp}
                                             id={message.id}
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
                                           recipient={message.recipient}
                                           timeStamp={message.timeStamp}
                                           id={message.id}
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
