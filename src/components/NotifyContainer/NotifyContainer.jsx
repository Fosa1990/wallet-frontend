import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import {
  iconBgCl,
  accentTextCl,
  circleFont,
} from '../../stylesheet/utils/stylesVars';

export default function NotifyContainer({ ...props }) {
  return <StyledNotify autoClose={4000} />;
}

const StyledNotify = styled(ToastContainer)`
  .Toastify__toast {
    max-width: 280px;
    height: 50px;
    border-radius: 20px;
    background-color: rgba(87, 243, 209, 0.9);
    backdrop-filter: blur(5px);
    color: ${accentTextCl};
    font-family: ${circleFont};
  }
  .Toastify__progress-bar {
    background-color: ${iconBgCl};
  }

  .Toastify__toast-icon svg {
    fill: ${iconBgCl};
  }
`;
