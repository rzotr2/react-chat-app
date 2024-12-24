export type User = {
    username: string,
    id: string,
    status?: string,
    phoneNumber: number,
    email: string,
    password: string,
    country?: string,
    isLoggedIn: boolean,
    gender: 'male' | 'female' | 'other',
}

export type Message = {
    text: string,
    author?: string,
    recipient?: string,
    timeStamp?: string,
    id: string,
    delivered?: boolean,
    received?: boolean
}
