import React from 'react';
import PropTypes from 'prop-types';
import { useField, ErrorMessage } from 'formik';
import styled from 'styled-components';
import {
  accentPositiveCl,
  iconDefaultCl,
  bgTabletCl,
  textPlcholderCl,
  accentNegativeCl,
} from '../../styles/stylesVars';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <LabelWrapper>
        <Label htmlFor={field.name}>
          {label}
          <Input
            title={
              field.name === 'email'
                ? 'For example: JohnDoe@domain.com'
                : 'Name may contain only letters, apostrophe, dash and spaces.'
            }
            className={`${meta.touched && meta.error && 'is-invalid'}`}
            {...field}
            {...props}
            autoComplete="on"
          />
        </Label>
        <Error>
          <ErrorMessage className="error" component="div" name={field.name} />
        </Error>
      </LabelWrapper>
    </>
  );
};

TextField.propTypes = {
  label: PropTypes.object,
  props: PropTypes.node,
};

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
