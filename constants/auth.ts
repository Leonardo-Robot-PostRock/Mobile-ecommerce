import { InputField } from '@/presentation/auth/components/AuthForm';

export const LOGIN_INPUTS: InputField[] = [
    {
        name: 'email',
        placeholder: 'Correo electrónico',
        keyboardType: 'email-address',
        autoCapitalize: 'none',
        icon: 'mail-outline',
    },
    {
        name: 'password',
        placeholder: 'Contraseña',
        secureTextEntry: true,
        autoCapitalize: 'none',
        icon: 'lock-closed-outline',
    },
];

export const REGISTER_INPUTS: InputField[] = [
    {
        name: 'fullName',
        placeholder: 'Nombre completo',
        autoCapitalize: 'words',
        icon: 'person-outline',
    },
    ...LOGIN_INPUTS,
];
