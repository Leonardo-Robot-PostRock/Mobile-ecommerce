import * as yup from 'yup';

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Email inválido')
        .required('El email es requerido'),
    password: yup
        .string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('La contraseña es requerida'),
});

export const registerValidationSchema = yup.object().shape({
    fullName: yup
        .string()
        .min(3, 'El nombre debe tener al menos 3 caracteres')
        .required('El nombre completo es requerido'),
    email: yup
        .string()
        .email('Email inválido')
        .required('El email es requerido'),
    password: yup
        .string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .matches(
            PASSWORD_REGEX,
            'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número'
        )
        .required('La contraseña es requerida'),
});

export type LoginFormValues = yup.InferType<typeof loginValidationSchema>;
export type RegisterFormValues = yup.InferType<typeof registerValidationSchema>;
