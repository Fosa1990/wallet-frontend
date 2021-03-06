import React from 'react';
import { Link } from 'react-router-dom';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useRegisterUserMutation } from '../../redux/auth/authReduce';
import { TextField } from './TextField';
import PasswordStrength from './PasswordStrength';
import PasswordShowHide from './PasswordShowHide';
import Button from '../Button/Button';
import { regexName, regexEmail } from '../../utils/regex';
import { ROUTES, USER_LIMIT } from '../../utils/constants';
import {
  accentPositiveCl,
  accentBgCl,
  size,
  poppinsFont,
  accentTextCl,
  iconDefaultCl,
  iconBgActiveCl,
} from '../../styles/stylesVars';
import logo from '../../assets/images/svg/logo.svg';
import Icons from '../../assets/images/svg/sprite.svg';

export default function RegistrationForm() {
  const [register] = useRegisterUserMutation();

  const validate = Yup.object({
    email: Yup.string()
      .matches(regexEmail, 'E-mail is invalid')
      .min(
        USER_LIMIT.EMAIL.MIN,
        `Email must be at least ${USER_LIMIT.EMAIL.MIN} characters long`,
      )
      .max(
        USER_LIMIT.EMAIL.MAX,
        `Email must be at most ${USER_LIMIT.EMAIL.MAX} characters long`,
      )
      .required('E-mail is required'),
    password: Yup.string()
      .min(
        6,
        `Password must be at least ${USER_LIMIT.PASSWORD.MIN} characters long`,
      )
      .max(
        16,
        `Password must be at most ${USER_LIMIT.PASSWORD.MAX} characters long`,
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
    name: Yup.string()
      .matches(regexName, 'Name is invalid')
      .min(
        USER_LIMIT.NAME.MIN,
        `Name must be at least ${USER_LIMIT.NAME.MIN} characters long`,
      )
      .max(
        USER_LIMIT.NAME.MAX,
        `Name must be at most ${USER_LIMIT.NAME.MAX} characters long`,
      )
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
          register(values);
          onSubmitProps.resetForm();
        }}
      >
        {formik => (
          <FromStyle>
            <LogoWrapper>
              <LogoIcon src={logo} />
              <Title>Wallet</Title>
            </LogoWrapper>
            <Form>
              <TextField
                className="input-style"
                label={
                  <svg width="21" height="16" className="labelIcon">
                    <use href={`${Icons}#icon-email`} />
                  </svg>
                }
                autoFocus
                name="email"
                placeholder="E-mail"
                type="email"
              />
              <Field
                name="password"
                type="password"
                component={PasswordShowHide}
                label={
                  <svg width="16" height="21" className="labelIcon">
                    <use href={`${Icons}#icon-password`} />
                  </svg>
                }
              ></Field>
              <Field
                name="confirmPassword"
                type="password"
                component={PasswordShowHide}
                label={
                  <svg width="16" height="21" className="labelIcon">
                    <use href={`${Icons}#icon-password`} />
                  </svg>
                }
              ></Field>
              <PasswordStrength password={formik.values.password} />
              <TextField
                label={
                  <svg width="18" height="18" className="labelIcon">
                    <use href={`${Icons}#icon-user`} />
                  </svg>
                }
                name="name"
                placeholder="Your name"
                type="text"
              />
              <ButtonWrapper>
                <Button
                  className="ButtonRegistr"
                  primary
                  color={accentBgCl}
                  background={accentPositiveCl}
                >
                  Sign up
                </Button>
                <Link to={ROUTES.LOGIN} className="ButtonLogin">
                  Login
                </Link>
              </ButtonWrapper>
            </Form>
          </FromStyle>
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
    line-height: 1.5;
  }
`;
const FromStyle = styled.div`
  font-family: ${poppinsFont};
  .labelIcon {
    position: absolute;
    left: 10px;
    fill: ${iconDefaultCl};
    cursor: pointer;
    &:focus,
    &:hover {
      fill: ${accentPositiveCl};
      outline: ${accentPositiveCl};
    }
  }
  ${size.mobile} {
    width: 320px;
    padding: 32px 20px 36px;
    margin: 0 auto;
  }
  ${size.tablet} {
    width: 533px;
    height: 100%;
    margin: 0 auto;
    padding: 40px 59px 66px 65px;
    background: ${accentBgCl};
    border-radius: 20px;
  }
  ${size.desktop} {
    width: 533px;
    height: 616px;
  }
  .Icon {
    margin-right: 20px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .ButtonLogin {
    width: 280px;
    padding: 10px 65px 10px 71px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    text-transform: uppercase;
    color: ${iconBgActiveCl};
    border: 1px solid ${iconBgActiveCl};
    border-radius: 20px;
    cursor: pointer;
    ${size.tablet},${size.desktop} {
      width: 300px;
    }
  }
`;
