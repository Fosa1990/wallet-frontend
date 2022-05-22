import React, { useState } from 'react';
import { useField, ErrorMessage } from 'formik';
import styled from 'styled-components';

import {
  accentPositiveCl,
  iconDefaultCl,
  bgTabletCl,
  textPlcholderCl,
  accentNegativeCl,
} from '../../stylesheet/utils/stylesVars';
import { IoIosEyeOff, IoIosEye } from 'react-icons/io';

const PasswordShowHide = ({ field, form, label }) => {
  // const [field, meta] = useField(props);
  console.log('field', field);
  console.log('meta', form);

  const [showHidePassword, changeShowHidePassword] = useState(false);
  const hasError = form.touched[field.name] && form.errors[field.name];

  return (
    <Container className="input-container">
      <>
        <LabelWrapper>
          <Label htmlFor={field.name}>
            {label}
            <Input
              placeholder={
                field.name === 'password' ? 'Password' : 'Confirm password'
              }
              // placeholder={field.name === 'password'}
              type={showHidePassword ? 'text' : 'password'}
              className={
                (`${form.touched && form.error && 'is-invalid'}`,
                hasError ? 'input-error input-field' : 'input-field')
              }
              {...field}
              // {...props}
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
        {/* <i
          className={hasError ? 'icon-error icon' : 'fa fa-key icon'}
          onClick={() => changeShowHidePassword(!showHidePassword)}
        >
          {!showHidePassword ? <IoIosEyeOff /> : <IoIosEye />}
        </i> */}
      </>
    </Container>
  );
};

export default PasswordShowHide;

const Container = styled.div`
  position: relative;
  // display: flex;
  width: 100%;
  margin-bottom: 15px;

  .icon {
    // padding: 10px;
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

  .input-field:focus {
    // border: 2px solid dodgerblue;
  }

  .input-error {
    // border: 2px solid red;
  }

  .icon-error {
    // background: red;
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
  width: 280px;
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
