import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { TextField } from '../RegistrationForm/TextField';
import * as Yup from 'yup';
import { useLoginUserMutation } from '../../redux/auth/authReduce';
import { regexEmail } from '../../helpers/regex';
import Button from '../Button/Button';
import styled from 'styled-components';
import {
  accentPositiveCl,
  accentBgCl,
  borderBtnCl,
  size,
  poppinsFont,
  accentTextCl,
} from '../../stylesheet/utils/stylesVars';

export default function LoginForm() {
  const [register] = useLoginUserMutation();

  const validate = Yup.object().shape({
    email: Yup.string()
      .email(regexEmail, 'E-mail is invalid')
      .required('E-mail required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(12, 'Password must be 12 characters or less')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values, onSubmitProps) => {
        register(values);
        onSubmitProps.resetForm();
      }}
    >
      {formik => (
        <div>
          <Form>
            <TextField label="E-mail" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            {/* <ButtonWrapper> */}
            <Button primary color={accentBgCl} background={accentPositiveCl}>
              Login
            </Button>
            <Button outlined color={borderBtnCl}>
              <Link to="/registration">Sign up</Link>
            </Button>
            {/* </ButtonWrapper> */}
          </Form>
        </div>
      )}
    </Formik>
  );
}
