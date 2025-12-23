import axios from 'axios';
import { Platform } from 'react-native';
import { AuthResponse } from '../actions/auth-actions';
import { User } from '../interface/user';

// TODO: conectar mediante envs vars, Android e IOS
const STAGE = process.env.EXPO_PUBLIC_STAGE || 'dev';

export const API_URL = (STAGE === 'prod')
    ? process.env.EXPO_PUBLIC_API_URL
    : (Platform.OS) === 'ios'
        ? process.env.EXPO_PUBLIC_API_URL_IOS
        : process.env.EXPO_PUBLIC_API_URL_ANDROID;

console.log({ STAGE, [Platform.OS]: API_URL })

const productsApi = axios.create({
    baseURL: API_URL,
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