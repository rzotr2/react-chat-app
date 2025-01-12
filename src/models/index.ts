export type User = {
    username: string,
    email: string,
    password: string,
    phoneNumber: number,
    country: string,
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

export type LoginPayload = Pick<User, 'email' | 'password'>;

export type SuccessResponse<R> = {
    success: true;
    response: R;
};

export type ErrorResponse = {
    success: false;
    error: string;
};

export type ServerResponse<R> = SuccessResponse<R> | ErrorResponse;


