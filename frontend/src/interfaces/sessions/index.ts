export interface ICreateAccountRequest {
    name: string;
    email: string;
    password: string;
    phone: string;
}

export interface ILoginRequest {
    email: string;
    password: string;
}
