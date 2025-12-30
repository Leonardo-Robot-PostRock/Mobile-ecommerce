import { InputField } from '@/presentation/auth/components/AuthForm';

export const LOGIN_INPUTS: InputField[] = [
    {
        placeholder: 'Correo electrónico',
        keyboardType: 'email-address',
        autoCapitalize: 'none',
        icon: 'mail-outline',
    },
    {
        placeholder: 'Contraseña',
        secureTextEntry: true,
        autoCapitalize: 'none',
        icon: 'lock-closed-outline',
    },
];

export const REGISTER_INPUTS: InputField[] = [
    {
        placeholder: 'Nombre completo',
        autoCapitalize: 'words',
        icon: 'person-outline',
    },
    ...LOGIN_INPUTS,
];
