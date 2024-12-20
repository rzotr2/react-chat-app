export type User = {
    name: string,
    id: string,
    status?: string,
    phoneNumber: number,
    email: string,
    password: string,
    country: string
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
