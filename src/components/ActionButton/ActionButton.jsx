import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import {
  size,
  iconBgActiveCl,
  iconBgCl,
} from '../../stylesheet/utils/stylesVars';

export default function ActionButton({ src, onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      <DelIcon src={src} />
    </Button>
  );
}
const DelIcon = styled(SVG)`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  & path {
    fill: ${iconBgCl};
  }
  ${size.tablet} {
    width: 28px;
    height: 28px;
    border-radius: 2px;
    margin-right: 23px;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  background: transparent;
  &:hover ${DelIcon} {
    path {
      fill: ${iconBgActiveCl};
    }
  }
`;

Button.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func,
};
