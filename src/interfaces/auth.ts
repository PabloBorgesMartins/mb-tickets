import { api } from '../services/api'

export interface IAuthState {
    token: string;
    user: IUserProps;
}

export interface ISignInCredentials {
    email: string;
    password: string;
}

export interface ISignUpCredentials {
    name: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IUpdateCredentials {
    name: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IUserProps {
    id: number;
    name: string;
    lastName: string;
    email: string;
}

/*RESPONSES*/
interface ResSignIn {
    token: string;
    user: any;
}

interface ResSignUp {
    token: string;
    user: any;
}



/* API FUNCTIONS */
export const handleSignIn = async (data: ISignInCredentials): Promise<ResSignIn> => {
    try {
        let response = await api.post<ResSignIn>('login', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const handleSignUp = async (data: ISignUpCredentials): Promise<ResSignUp> => {
    try {
        let response = await api.post<ResSignUp>(`register`, {
            ...data
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
