import { Flex, Box } from "@chakra-ui/react";
import { SenderMessage } from "./message/senderMessage.tsx";
import { ReceiverMessage } from "./message/receiverMessage.tsx";

const messages = [
    {
        messageText: "Привіт! Як справи? 😏",
        messageAuthor: "other",
        messageRecipient: "me",
        messageTimeStamp: "2024-12-09T10:15:00Z",
        messageId: "msg1",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Привіт! Справи норм, поки не спитав 😅",
        messageAuthor: "me",
        messageRecipient: "other",
        messageTimeStamp: "2024-12-09T10:16:23Z",
        messageId: "msg2",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Ахаха, класичний варіант 😂 Чого такий драматичний?",
        messageAuthor: "other",
        messageRecipient: "me",
        messageTimeStamp: "2024-12-09T10:17:12Z",
        messageId: "msg3",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Та просто холодильник порожній, а я стою перед ним як персонаж RPG, який думає, що забув взяти квест 😩",
        messageAuthor: "me",
        messageRecipient: "other",
        messageTimeStamp: "2024-12-09T10:18:47Z",
        messageId: "msg4",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "😂😂😂 Можливо, квест був у сусідній кімнаті? Мама ж щось казала про покупки?",
        messageAuthor: "other",
        messageRecipient: "me",
        messageTimeStamp: "2024-12-09T10:19:30Z",
        messageId: "msg5",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Ні, мама просто сказала: «Не забудь!», і пішла. Інструкцій — нуль 🫠",
        messageAuthor: "me",
        messageRecipient: "other",
        messageTimeStamp: "2024-12-09T10:20:15Z",
        messageId: "msg6",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Оооо, це ж класичний 'прихований квест'! Треба шукати підказки по квартирі 🕵️",
        messageAuthor: "other",
        messageRecipient: "me",
        messageTimeStamp: "2024-12-09T10:21:04Z",
        messageId: "msg7",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Знайшов підказку — записка: «Картопля скінчилась». Ну все ясно, йду в магазин 🛒",
        messageAuthor: "me",
        messageRecipient: "other",
        messageTimeStamp: "2024-12-09T10:22:33Z",
        messageId: "msg8",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Не забудь зберегтись перед виходом з дому! 😎",
        messageAuthor: "other",
        messageRecipient: "me",
        messageTimeStamp: "2024-12-09T10:23:10Z",
        messageId: "msg9",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Автосейв не працює, треба знайти точку збереження біля під'їзду 😂",
        messageAuthor: "me",
        messageRecipient: "other",
        messageTimeStamp: "2024-12-09T10:24:05Z",
        messageId: "msg10",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "А ти знаєш, що якщо тримати ложку в роті під час різання цибулі, то не будеш плакати?",
        messageAuthor: "other",
        messageRecipient: "me",
        messageTimeStamp: "2024-12-09T10:02:00Z",
        messageId: "msg11",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Знаю. А ще, якщо тримати ложку в роті, виглядаєш як інтелектуал із фільму про шпигунів 90-х.",
        messageAuthor: "me",
        messageRecipient: "other",
        messageTimeStamp: "2024-12-09T10:03:00Z",
        messageId: "msg12",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Спробував. Сусіди вже другий раз проходять повз вікно і щось шепочуться 😂",
        messageAuthor: "other",
        messageRecipient: "me",
        messageTimeStamp: "2024-12-09T10:04:00Z",
        messageId: "msg13",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Головне, щоб не поліцію викликали. Напишуть у протоколі: 'підозріло різав цибулю'.",
        messageAuthor: "me",
        messageRecipient: "other",
        messageTimeStamp: "2024-12-09T10:05:00Z",
        messageId: "msg14",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Зараз перевірю, чи діє це з часником...",
        messageAuthor: "other",
        messageRecipient: "me",
        messageTimeStamp: "2024-12-09T10:06:00Z",
        messageId: "msg15",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Якщо раптом сусіди почнуть бити в двері з кілками та хрестами — пиши одразу 😅",
        messageAuthor: "me",
        messageRecipient: "other",
        messageTimeStamp: "2024-12-09T10:07:00Z",
        messageId: "msg16",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Я поставив дзеркало біля дверей. Нехай самі на себе подивляться!",
        messageAuthor: "other",
        messageRecipient: "me",
        messageTimeStamp: "2024-12-09T10:08:00Z",
        messageId: "msg17",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Стратегічний геній! Тепер ти точно в безпеці!",
        messageAuthor: "me",
        messageRecipient: "other",
        messageTimeStamp: "2024-12-09T10:09:00Z",
        messageId: "msg18",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "До речі, уявляєш, забув навіщо різав ту цибулю...",
        messageAuthor: "other",
        messageRecipient: "me",
        messageTimeStamp: "2024-12-09T10:10:00Z",
        messageId: "msg19",
        messageDelivered: true,
        messageReceived: true
    },
    {
        messageText: "Нічого страшного. Тепер у тебе є нарізана цибуля і чудова історія для друзів!",
        messageAuthor: "me",
        messageRecipient: "other",
        messageTimeStamp: "2024-12-09T10:11:00Z",
        messageId: "msg20",
        messageDelivered: true,
        messageReceived: true
    }
];

export const OpenedChat = () => {
    return (
        <Box height="100%"
             gap="2"
             overflowY="scroll"
             paddingEnd="4">
            <Flex direction="column" justifyContent="flex-end">
                {messages.map((message, index) => {
                    if (message.messageAuthor === 'me') {
                        return (
                            <Box
                                key={index}
                                alignSelf="flex-end"
                                maxWidth="45%">
                                <ReceiverMessage messageText={message.messageText}
                                                 messageAuthor={message.messageAuthor}
                                                 messageRecipient={message.messageRecipient}
                                                 messageTimeStamp={message.messageTimeStamp}
                                                 messageId={message.messageId}
                                                 messageDelivered={message.messageDelivered}
                                                 messageReceived={message.messageReceived}>
                                </ReceiverMessage>
                            </Box>
                        );
                    } else {
                        return (
                            <Box
                                key={index}
                                alignSelf="flex-start"
                                maxWidth="45%">
                                <SenderMessage messageText={message.messageText}
                                               messageAuthor={message.messageAuthor}
                                               messageRecipient={message.messageRecipient}
                                               messageTimeStamp={message.messageTimeStamp}
                                               messageId={message.messageId}
                                               messageDelivered={message.messageDelivered}
                                               messageReceived={message.messageReceived}>
                                </SenderMessage>
                            </Box>
                        );
                    }
                })}
            </Flex>
        </Box>
    );
};
