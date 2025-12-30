import { REGISTER_INPUTS } from '@/constants/auth';
import { RegisterFormValues, registerValidationSchema } from '@/core/auth/validations/schemas';
import AuthForm from '@/presentation/auth/components/AuthForm';
import { FormikHelpers } from 'formik';

const initialValues: RegisterFormValues = {
    fullName: '',
    email: '',
    password: '',
};

const RegisterScreen = () => {
    const handleSubmit = async (values: RegisterFormValues, formikHelpers: FormikHelpers<RegisterFormValues>) => {
        try {

            console.log('Register values:', values);
            
        } catch (error) {
            formikHelpers.setStatus({ error: (error as Error).message });
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