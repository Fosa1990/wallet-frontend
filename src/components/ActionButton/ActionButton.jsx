import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import { size, iconBgActiveCl, iconBgCl } from '../../styles/stylesVars';

export default function ActionButton({ src, onClick, disabled = false }) {
  return (
    <Button type="button" onClick={onClick} disabled={disabled}>
      <DelIcon src={src} />
    </Button>
  );
}

ActionButton.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

const DelIcon = styled(SVG)`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  & path {
    fill: ${iconBgCl};
  }
  ${size.tablet} {
    width: 20px;
    height: 20px;
    border-radius: 2px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  ${size.tablet} {
    width: 20px;
    height: 20px;
  }
  &:hover ${DelIcon} {
    path {
      fill: ${iconBgActiveCl};
    }
  }
`;
