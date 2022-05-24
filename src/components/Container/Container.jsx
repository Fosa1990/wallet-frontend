import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from '../../styles/stylesVars';

export default function Container({ children }) {
  return <ContainerWrap>{children}</ContainerWrap>;
}

Container.propTypes = {
  children: PropTypes.node,
};

const ContainerWrap = styled.div`
  position: relative;
  width: 100vw;
  padding: 0 20px;
  margin: 0 auto;
  /* display: flex;
  justify-content: center; */

  ${size.mobile} {
    width: 320px;
  }
  ${size.tablet} {
    width: 768px;
    padding: 0 32px;
    margin: 0 auto;
    /* background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(50px);
    flex-grow: 1; */
  }
  ${size.desktop} {
    width: 1280px;
    padding: 0 16px;
  }
`;
