import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from '../RegistrationForm/TextField';
import { useLoginUserMutation } from '../../redux/auth/authReduce';
import { regexEmail } from '../../helpers/regex';
import { ROUTES } from '../../helpers/constants';
import Button from '../Button/Button';
import logo from '../../images/svg/logo.svg';
import Icons from '../../images/svg/sprite.svg';
// import { ReactComponent as GoogleIcon } from '../../images/svg/icons-google.svg';
import styled from 'styled-components';
import {
  iconDefaultCl,
  accentPositiveCl,
  accentBgCl,
  borderBtnCl,
  size,
  poppinsFont,
  accentTextCl,
  iconBgActiveCl,
} from '../../stylesheet/utils/stylesVars';

export default function LoginForm() {
  const [register] = useLoginUserMutation();

  const validate = Yup.object().shape({
    email: Yup.string()
      .matches(regexEmail, 'E-mail is invalid')
      .required('E-mail is required'),
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
        <FormWrapper>
          <Logo>
            <Icon src={logo} />
            <Title>Wallet</Title>
          </Logo>
          <Form>
            <TextField
              label={
                <svg width="20" height="16" className="labelIcon">
                  <use href={`${Icons}#icon-email`} />
                </svg>
              }
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
            <ButtonWrapper>
              <Button
                primary
                color={accentBgCl}
                background={accentPositiveCl}
                disabled={!formik.isValid || formik.isSubmitting}
                className="disabledButton"
              >
                Login
              </Button>
              <Link to={`/${ROUTES.REGISTRATION}`}>
                <Button outlined color={borderBtnCl} className="RegisterButton">
                  Sign up
                </Button>
              </Link>
              {/* <a
                className="IconGoogle"
                href="http://localhost:8081/api/auth/google"
              > */}
              {/* <a
                className="IconGoogle"
                href="https://amazing-wallet.herokuapp.com/api/auth/google"
              >
                <GoogleIcon width={32} height={28} />
                Login
              </a> */}
            </ButtonWrapper>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
}

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

const Icon = styled.img`
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

const FormWrapper = styled.div`
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
    padding: 107px 20px;
    margin: 0 auto;
  }

  ${size.tablet} {
    width: 533px;
    padding: 40px 59px 62px 65px;
    margin: 0 auto;
    background: #fff;
    border-radius: 20px;
  }

  ${size.desktop} {
    width: 533px;
    // height: 518px;
    height: 468px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .disabledButton:disabled {
    cursor: not-allowed;
    box-shadow: inset 0px 0px 45px rgb(255 255 255 / 70%);
  }
  // .IconGoogle {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   width: 280px;
  //   font-size: 18px;
  //   line-height: 1.5;
  //   text-align: center;
  //   padding: 10px 65px 10px 71px;
  //   color: ${iconBgActiveCl};
  //   text-transform: uppercase;
  //   border: 1px solid ${iconBgActiveCl};
  //   border-radius: 20px;
  //   ${size.tablet} {
  //     width: 300px;
  //   }
  // }
  // .RegisterButton {
  //   margin-bottom: 20px;
  // }
`;
