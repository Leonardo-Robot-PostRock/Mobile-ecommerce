import { REGISTER_INPUTS } from '@/constants/auth';
import AuthForm from '@/presentation/auth/components/AuthForm';

const RegisterScreen = () => {
    return (
        <AuthForm
            title='Crear una cuenta'
            subtitle='Por favor crea una cuenta para continuar'
            inputs={REGISTER_INPUTS}
            buttonText='Crear cuenta'
            onButtonPress={() => { }}
            linkText='¿Ya tienes cuenta?'
            linkLabel='Ingresar'
            linkHref='/auth/login'
        />
    );
};

export default RegisterScreen;