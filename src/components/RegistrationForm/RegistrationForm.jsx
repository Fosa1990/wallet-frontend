import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { useRegisterUserMutation } from '../../redux/auth/authReduce';
import { regexName, regexEmail } from '../../helpers/regex';
import PasswordStrenght from './PasswordStrength';
import Button from '../Button/Button';
import logo from '../../images/svg/logo.svg';

import styled from 'styled-components';
import {
  accentPositiveCl,
  accentBgCl,
  borderBtnCl,
  size,
  poppinsFont,
  accentTextCl,
} from '../../stylesheet/utils/stylesVars';

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
      .required('Required'),
  });

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
          console.log(values);
          register(values);
          onSubmitProps.resetForm();
        }}
      >
        {formik => (
          <div>
            {/* {console.log('formik.values', formik.values)} */}
            <LogoWrapper>
              <LogoIcon src={logo} />
              <Title>Wallet</Title>
            </LogoWrapper>
            <Form>
              <TextField label="E-mail" name="email" type="email" />
              <TextField label="Password" name="password" type="password" />
              <TextField
                label="Confirm password"
                name="confirmPassword"
                type="password"
              />
              <PasswordStrenght password={formik.values.password} />
              <TextField label="Your name" name="name" type="text" />
              <ButtonWrapper>
                <Button
                  primary
                  color={accentBgCl}
                  background={accentPositiveCl}
                >
                  Sign up
                </Button>
                <Button outlined color={borderBtnCl}>
                  <Link to="/login">Login</Link>
                </Button>
              </ButtonWrapper>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

const LogoIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  ${size.tablet} {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;

const Title = styled.h1`
  font-family: ${poppinsFont};
  font-size: 25px;
  font-weight: 700;
  color: ${accentTextCl};

  ${size.tablet} {
    font-size: 30px;
    line-height: 1, 5;
  }
`;

const FromStyle = styled.div`
  // ${size.mobile} {
  //   width: 320px;
  //   padding-top: 32px;
  //   padding-bottom: 36px;
  //   margin: 0 auto;
  // }
  // ${size.desktop} {
  //   padding-top: 40px;
  //   bottom: 50%;
  //   right: 85px;
  //   transform: translateY(50%);
  //   margin: 0;
  // }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
