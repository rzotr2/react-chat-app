export type User = {
    username: string,
    email: string,
    password: string,
    phoneNumber: number,
    country: string,
    isLoggedIn: boolean,
    isAdmin: boolean,
    gender: string,
}

export type Message = {
    text: string,
    author: string,
    to: string,
    timestamp: Date,
    delivered: boolean,
    received: boolean
}
