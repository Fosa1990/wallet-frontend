import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form} from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup'
import { useRegisterUserMutation } from '../../redux/auth/authReduce';
import { regexName, regexEmail } from '../../helpers/regex'
import PasswordStrenght from './PasswordStrength';


export default function RegistrationForm() {

   const [register] = useRegisterUserMutation();

    const validate = Yup.object({
    email: Yup.string()
      .email(regexEmail, 'E-mail is invalid')
      .required('E-mail required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(16, 'Password must be 16 characters or less')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
    name: Yup.string()
      .min(1, regexName, 'Name must be at least 1 character')
      .max(12, regexName, 'Must be 12 characters or less')
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
          {console.log('formik.values', formik.values)}
          <Form>
            <TextField label="E-mail" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
              <TextField label="Confirm password" name="confirmPassword" type="password"  />
              <PasswordStrenght password={formik.values.password}/>
            <TextField label="Your name" name="name" type="text" />
              <button type="submit">Sign up</button>
              <Link to="/login">Login</Link>
          </Form>
        </div>
      )}
      </Formik>
    </>
  )
}