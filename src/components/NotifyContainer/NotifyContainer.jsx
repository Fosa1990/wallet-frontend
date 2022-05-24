import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import {
  iconBgCl,
  accentTextCl,
  circleFont,
  toastifyContainerBgc,
  toastifyErrorBgc,
} from '../../styles/stylesVars';

export default function NotifyContainer({ ...props }) {
  return <StyledNotify autoClose={4000} />;
}

NotifyContainer.propTypes = {
  props: PropTypes.any,
};

const StyledNotify = styled(ToastContainer)`
  .Toastify__toast {
    max-width: 280px;
    height: 50px;
    border-radius: 20px;
    background-color: ${toastifyContainerBgc};
    backdrop-filter: blur(5px);
    color: ${accentTextCl};
    font-family: ${circleFont};
  }
  .Toastify__progress-bar {
    background-color: ${iconBgCl};
  }
  .Toastify__error {
    background-color: ${toastifyErrorBgc};
    color: black;
  }
  .Toastify__toast-icon svg {
    fill: ${iconBgCl};
  }
`;
