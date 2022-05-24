import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import styled from 'styled-components';
import { IoIosEyeOff, IoIosEye } from 'react-icons/io';
import {
  accentPositiveCl,
  iconDefaultCl,
  bgTabletCl,
  textPlcholderCl,
  accentNegativeCl,
} from '../../styles/stylesVars';

const PasswordShowHide = ({ field, form, label }) => {
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const hasError = form.touched[field.name] && form.errors[field.name];

  return (
    <Container className="input-container">
      <>
        <LabelWrapper>
          <Label htmlFor={field.name}>
            {label}
            <Input
              title={
                field.name === 'password'
                  ? 'The length of the password should be from 6 to 16 characters long'
                  : 'The length of the password should be from 6 to 16 characters long'
              }
              placeholder={
                field.name === 'password' ? 'Password' : 'Confirm password'
              }
              type={showHidePassword ? 'text' : 'password'}
              className={
                (`${form.touched && form.error && 'is-invalid'}`,
                hasError ? 'input-error input-field' : 'input-field')
              }
              {...field}
              autoComplete="on"
            />
            <i
              className={hasError ? 'icon-error icon' : 'fa fa-key icon'}
              onClick={() => changeShowHidePassword(!showHidePassword)}
            >
              {!showHidePassword ? (
                <IoIosEyeOff className="icon-close-eye" />
              ) : (
                <IoIosEye className="icon-open-eye" />
              )}
            </i>
          </Label>
          <Error>
            <ErrorMessage className="error" component="div" name={field.name} />
          </Error>
        </LabelWrapper>
      </>
    </Container>
  );
};

PasswordShowHide.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  label: PropTypes.object,
};

const Container = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  .icon {
    color: ${accentPositiveCl};
    min-width: 50px;
    text-align: center;
    .icon-close-eye,
    .icon-open-eye {
      width: 20px;
      height: 20px;
    }
  }
  .icon:hover {
    cursor: pointer;
  }
  .input-field {
    width: 100%;
    padding-left: 55px;
    outline: none;
  }
`;

const LabelWrapper = styled.div`
  margin-bottom: 40px;
  outline: none;
  &:hover,
  &:focus,
  &:active {
    outline: 2px solid ${accentPositiveCl};
    fill: ${accentPositiveCl};
  }
`;

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${iconDefaultCl};
  fill: ${accentPositiveCl};
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  font-size: 18px;
  line-height: 1.5;
  padding-left: 55px;
  border: ${bgTabletCl};
  outline: none;
  &:hover {
    outline: ${accentPositiveCl};
  }
  ::placeholder {
    color: ${textPlcholderCl};
  }
`;

const Error = styled.div`
  position: absolute;
  font-size: 12px;
  color: ${accentNegativeCl};
`;

export default PasswordShowHide;
