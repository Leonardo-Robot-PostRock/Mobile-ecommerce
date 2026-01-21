import { REGISTER_INPUTS } from '@/constants/auth';
import { RegisterFormValues, registerValidationSchema } from '@/core/auth/validations/schemas';
import AuthForm from '@/presentation/auth/components/AuthForm';
import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { router } from 'expo-router';
import { FormikHelpers } from 'formik';
import { Alert } from 'react-native';

const initialValues: RegisterFormValues = {
    fullName: '',
    email: '',
    password: '',
};

const RegisterScreen = () => {
    const { register } = useAuthStore();

    const handleSubmit = async (values: RegisterFormValues, formikHelpers: FormikHelpers<RegisterFormValues>) => {
        const { fullName, email, password } = values;
        try {

            const wasSuccessful = await register(email, password, fullName);

            if (wasSuccessful) {
                router.replace('/');
                return;
            }

        } catch (error) {
            Alert.alert('Error', 'No se pudo crear la cuenta. Por favor, inténtalo de nuevo.');
        } finally {
            formikHelpers.setSubmitting(false);
        }
    };

    return (
        <AuthForm
            title='Crear una cuenta'
            subtitle='Por favor crea una cuenta para continuar'
            inputs={REGISTER_INPUTS}
            buttonText='Crear cuenta'
            linkText='¿Ya tienes cuenta?'
            linkLabel='Ingresar'
            linkHref='/auth/login'
            initialValues={initialValues}
            validationSchema={registerValidationSchema}
            onSubmit={handleSubmit}
        />
    );
};

export default RegisterScreen;