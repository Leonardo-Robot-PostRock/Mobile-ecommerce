import { InputField } from "@/core/auth/interface/auth-form-inputs";

export const LOGIN_INPUTS: InputField<{ email: string; password: string }>[] = [
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

export const REGISTER_INPUTS: InputField<{ fullName: string; email: string; password: string }>[] = [
    {
        name: 'fullName',
        placeholder: 'Nombre completo',
        autoCapitalize: 'words',
        icon: 'person-outline',
    },
    ...LOGIN_INPUTS,
];
