export interface UserJwt {
    id: string;
    email: string;
    name: string;
    image: string;
    token?: string;
    idToken?: string;
}