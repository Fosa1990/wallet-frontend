import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from './TextField';
import { useRegisterUserMutation } from '../../redux/auth/authReduce';
import { regexName, regexEmail } from '../../helpers/regex';
import { ROUTES } from '../../helpers/constants';
import PasswordStrenght from './PasswordStrength';
import Button from '../Button/Button';
import logo from '../../images/svg/logo.svg';
// import { ReactComponent as GoogleIcon } from '../../images/svg/icons-google.svg';

import Icons from '../../images/svg/sprite.svg';
import styled from 'styled-components';
import {
  accentPositiveCl,
  accentBgCl,
  borderBtnCl,
  size,
  poppinsFont,
  accentTextCl,
  iconDefaultCl,
  iconBgActiveCl,
} from '../../stylesheet/utils/stylesVars';

const validateName = name => regexName.test(name);

export default function RegistrationForm() {
  const [register] = useRegisterUserMutation();

  const validate = Yup.object({
    email: Yup.string()
      .matches(regexEmail, 'E-mail is invalid')
      .required('E-mail is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(16, 'Password must be 16 characters or less')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
    name: Yup.string()
      .min(1, validateName, 'Name must be at least 1 character')
      .max(12, validateName, 'Must be 12 characters or less')
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
          // console.log(values);
          register(values);
          onSubmitProps.resetForm();
        }}
      >
        {formik => (
          <FromStyle>
            {/* {console.log('formik.values', formik.values)} */}
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
              <TextField
                label={
                  <svg width="16" height="21" className="labelIcon">
                    <use href={`${Icons}#icon-password`} />
                  </svg>
                }
                name="password"
                placeholder="Password"
                type="password"
              />
              <TextField
                label={
                  <svg width="16" height="21" className="labelIcon">
                    <use href={`${Icons}#icon-password`} />
                  </svg>
                }
                name="confirmPassword"
                placeholder="Confirm password"
                type="password"
                className="label"
              />
              <PasswordStrenght password={formik.values.password} />
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
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Sign up
                </Button>
                <Link to={ROUTES.LOGIN}>
                  <Button className="ButtonLogin" outlined color={borderBtnCl}>
                    Login
                  </Button>
                </Link>
                {/* <a
                  className="IconGoogle"
                  href="http://localhost:8081/api/auth/google"
                > */}
                {/* <a
                  className="IconGoogle"
                  href="https://amazing-wallet.herokuapp.com/api/auth/google"
                > */}
                {/* <GoogleIcon width={32} height={28} />
                  Sign up
                </a> */}
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
    padding: 40px 59px 66px 65px;
    margin: 0 auto;
    background: #fff;
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

  .ButtonRegistr:disabled {
    cursor: not-allowed;
    box-shadow: inset 0px 0px 45px rgb(255 255 255 / 70%);
  }

  .ButtonLogin {
    // margin-bottom: 20px;
  }

  .IconGoogle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
    padding: 10px 65px 10px 71px;
    color: ${iconBgActiveCl};
    text-transform: uppercase;
    border: 1px solid ${iconBgActiveCl};
    border-radius: 20px;

    ${size.tablet},${size.desktop} {
      width: 300px;
    }
  }
`;
