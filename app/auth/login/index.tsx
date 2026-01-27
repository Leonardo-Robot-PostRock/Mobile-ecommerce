import { FormikHelpers } from 'formik';

import { LOGIN_INPUTS } from '@/constants/auth';
import AuthForm from '@/presentation/auth/components/AuthForm';
import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { LoginFormValues, loginValidationSchema } from '@/presentation/auth/validations/schemas';
import { router } from 'expo-router';
import { Alert } from 'react-native';

const initialValues: LoginFormValues = {
    email: '',
    password: '',
};

const LoginScreen = () => {
    const { login } = useAuthStore();

    const handleSubmit = async (values: LoginFormValues, formikHelpers: FormikHelpers<LoginFormValues>) => {
        const { email, password } = values;

        try {
            const wasSuccessful = await login(email, password);

            if (wasSuccessful) {
                router.replace('/');
                return;
            }

            // await authActions.login(values);
        } catch (error) {
            Alert.alert('Error', 'Correo electrónico o contraseña incorrectos.');
        } finally {
            formikHelpers.setSubmitting(false);
        }
    };

    return (
        <AuthForm
            title='Ingresar'
            subtitle='Por favor ingrese para continuar'
            inputs={LOGIN_INPUTS}
            buttonText='Ingresar'
            linkText='¿No tienes cuenta?'
            linkLabel='Crear cuenta'
            linkHref='/auth/register'
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={handleSubmit}
        />
    );
};

export default LoginScreen;