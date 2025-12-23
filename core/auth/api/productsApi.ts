import axios from 'axios';
import { AuthResponse } from '../actions/auth-actions';
import { User } from '../interface/user';

// TODO: conectar mediante envs vars, Android e IOS

const productsApi = axios.create({
    baseUrl: 'localhost:3000/api',
})

//TODO: interceptores

export default productsApi;

const returnUserToken = (data: AuthResponse): { user: User, token: string } => {
    const { token, ...user } = data;

    return { user, token }

}

export const authLogin = async (email: string, password: string) => {
    email = email.toLocaleLowerCase();

    try {
        const { data } = await productsApi.post<AuthResponse>('/auth/login', { email, password });

        return returnUserToken(data);
    } catch (error) {
        throw new Error('User and/or password are not valid');
    }
}

export const authCheckStatus = async () => {
    try {
        const { data } = await productsApi.get<AuthResponse>('/auth/check-status');

        return returnUserToken(data);
    } catch (error) {
        return null;
    }
}

//TODO: Tarea: hacer el register