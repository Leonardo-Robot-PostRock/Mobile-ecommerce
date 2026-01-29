
import { Formik, FormikHelpers, FormikProps } from 'formik';
import * as yup from 'yup';

interface Props<T extends Record<string, any>> {
    initialValues: T;
    children: (formik: FormikProps<T>) => React.ReactNode;
    onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<void>;
    validationSchema?: yup.ObjectSchema<T>;

}

const FormContainer = <T extends object>({ initialValues, children, onSubmit, validationSchema }: Props<T>) => {
    return (
        <Formik
            initialValues={initialValues as T}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formikProps) => (
                <>
                    {children(formikProps)}
                </>
            )}
        </Formik>

    )
}

export default FormContainer;