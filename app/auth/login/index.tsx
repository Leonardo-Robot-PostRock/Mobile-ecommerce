import { FormikHelpers } from 'formik';

import { LOGIN_INPUTS } from '@/constants/auth';
import { LoginFormValues, loginValidationSchema } from '@/core/auth/validations/schemas';
import AuthForm from '@/presentation/auth/components/AuthForm';

const initialValues: LoginFormValues = {
    email: '',
    password: '',
};

const LoginScreen = () => {
    const handleSubmit = async (values: LoginFormValues, formikHelpers: FormikHelpers<LoginFormValues>) => {
        try {
            // TODO: Implementar lógica de login con la API
            console.log('Login values:', values);
            // await authActions.login(values);
        } catch (error) {
            formikHelpers.setStatus({ error: (error as Error).message });
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