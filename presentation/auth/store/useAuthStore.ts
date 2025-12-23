import { authCheckStatus, authLogin } from "@/core/auth/api/productsApi";
import { User } from "@/core/auth/interface/user";
import { create } from "zustand";

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';

export interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;

    login: (email: string, password: string) => Promise<boolean>;
    checkStatus: () => Promise<void>;
    logout: () => Promise<void>;
    changeStatus: (token?: string, user?: User) => boolean;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
    //Properties, variables or states
    status: 'checking',
    token: undefined,
    user: undefined,

    changeStatus: (token?: string, user?: User) => {
        if (!token || !user) {
            set({ status: 'unauthenticated', token: undefined, user: undefined });
            //TODO: llamar logout

            return false;
        }
        
        set({
            status: 'authenticated',
            token,
            user
        })

        return true;
    },

    //Actions, methods or functions
    login: async (email: string, password: string) => {
        const { token, user } = await authLogin(email, password);
        return get().changeStatus(token, user);
    },

    checkStatus: async () => {
        const res = await authCheckStatus();
        get().changeStatus(res?.token, res?.user)
    },

    logout: async () => {
        //Clear token en el secure storage
        set({ status: 'unauthenticated', token: undefined, user: undefined })
    }
}))