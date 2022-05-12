import React from 'react';
import { Formik, Form} from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup'


export default function RegistrationForm() {
  const validate = Yup.object().shape({
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
    <Formik initialValues={{
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          {/* {console.log(formik.values)} */}
          <Form>
            <TextField label="E-mail" name="email" type="email" />
            <TextField label="Пароль" name="password" type="password" />
            <TextField label="Подтвердите пароль" name="confirmPassword" type="password" />
            <TextField label="Ваше имя" name="name" type="text" />
            <button type="submit">Регистрация</button>
            <button type="submit">Вход</button>
          </Form>
        </div>
      )}
          </Formik>
  )

  // const formik = useFormik({
  //    initialValues: {
  //      email: '',
  //       password: '',
  //       confirmPassword: '',
  //       name: '',
  //    },
  //    onSubmit: values => {
  //      alert(JSON.stringify(values, null, 2));
  //    },
  // });
  
  // return (
  //   <>
  //     <div >Component: RegistrationForm</div>
  //     <form onSubmit={formik.handleSubmit}>
  //      <label htmlFor="email">E-mail</label>
  //      <input
  //        id="email"
  //        name="email"
  //        type="email"
  //        onChange={formik.handleChange}
  //        value={formik.values.email}
  //      />
  //      <label htmlFor="password">Пароль</label>
  //      <input
  //        id="password"
  //        name="password"
  //        type="text"
  //        onChange={formik.handleChange}
  //        value={formik.values.password}
  //       />
  //       <label htmlFor="confirmPassword">Подтвердите пароль</label>
  //      <input
  //        id="confirmPassword"
  //        name="confirmPassword"
  //        type="text"
  //        onChange={formik.handleChange}
  //        value={formik.values.confirmPassword}
  //      />
  //      <label htmlFor="name">Ваше имя</label>
  //      <input
  //        id="name"
  //        name="name"
  //        type="text"
  //        onChange={formik.handleChange}
  //        value={formik.values.name}
  //      />
  //       <button type="submit">Регистрация</button>
  //       <button type="submit">Вход</button>
  //    </form>
  //   </>
    
  // )
}