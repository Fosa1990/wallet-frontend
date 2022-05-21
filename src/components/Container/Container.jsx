import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from '../../stylesheet/utils/stylesVars';

const ContainerWrap = styled.div`
  position: relative;
  width: 100vw;
  padding: 0 20px;
  margin: 0 auto;

  ${size.mobile} {
    width: 320px;
  }
  ${size.tablet} {
    width: 768px;
    padding: 0 32px;
  }
  ${size.desktop} {
    width: 1280px;
    padding: 0 16px;
  }
`;

export default function Container({ children }) {
  return <ContainerWrap>{children}</ContainerWrap>;
}

Container.propTypes = {
  children: PropTypes.node,
};
