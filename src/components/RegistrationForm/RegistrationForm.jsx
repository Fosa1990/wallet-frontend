import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form} from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup'
import { useRegisterUserMutation } from '../../redux/auth/authReduce';


export default function RegistrationForm() {

   const [register] = useRegisterUserMutation();

    const validate = Yup.object({
    email: Yup.string()
      .email('E-mail is invalid')
      .required('E-mail required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(12, 'Password must be 12 characters or less')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
    name: Yup.string()
      .min(1, 'Name must be at least 1 character')
      .max(12, 'Must be 12 characters or less')
      .required('Required')
    })

  return (
    <>
      <Formik
      initialValues={{
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    }}
      validationSchema={validate}
      onSubmit={(values, onSubmitProps) => {
        console.log(values)
        register(values)
        onSubmitProps.resetForm()     }}
    >
      {formik => (
        <div>
          {/* {console.log('formik.values', formik.values)} */}
          <Form>
            <TextField label="E-mail" name="email" type="email" />
            <TextField label="Пароль" name="password" type="password" />
            <TextField label="Подтвердите пароль" name="confirmPassword" type="password" />
            <TextField label="Ваше имя" name="name" type="text" />
              <button type="submit">Регистрация</button>
              <Link to="/login">Вход</Link>
          </Form>
        </div>
      )}
    </Formik>
    
    </>
  )
}