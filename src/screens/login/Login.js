import {useFormik} from 'formik';
import * as Yup from 'yup';

export const Login = service => {
  const {callLoginService} = service();

  const loginSchema = Yup.object({
    email: Yup.string().required('Email required').email('Invalid email'),
    password: Yup.string()
      .required('Password required')
      .min(6, 'Must be more than 6 characters'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async () => {
      await callLoginService(values);
    },
  });

  const {handleSubmit, values, setFieldValue, errors, touched} = formik;

  return {
    values,
    errors,
    touched,
    setFieldValue,
    handleSubmit,
  };
};
