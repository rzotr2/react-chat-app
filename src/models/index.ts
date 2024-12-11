export type User = {
    userName: string,
    userId: string,
    userStatus?: string,
    userPhoneNumber: number,
    userEmail: string,
    userPassword: string,
    userCountry: string
}

export type Message = {
    messageText: string,
    messageAuthor: string,
    messageRecipient: string,
    messageTimeStamp: string,
    messageId: string,
    messageDelivered: boolean,
    messageReceived: boolean
}
