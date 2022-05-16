import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { modalBgCl, accentBgCl, size } from '../../stylesheet/utils/stylesVars';
import Icon from '../Icon';
const modalRoot = document.querySelector('#root-modal');

const Overlay = styled.div`
  ${size.tablet} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${modalBgCl};
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 10px 56px;
  background-color: ${accentBgCl};
  border-radius: 20px;
  ${size.tablet} {
    padding: 40px 80px;
  }
`;

const Button = styled.button`
  display: ${props => props.closeBtn || 'none'};
  ${size.tablet} {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    width: 40px;
    height: 40px;
  }
`;

export default function Modal({ closeBtn, children }) {
  return createPortal(
    <Overlay>
      <Content>
        <Button
          type="button"
          // onClick={onModalClose}
          aria-label="close Modal Window"
        >
          <Icon
            width="16px"
            height="16px"
            stroke="currentColor"
            iconName="icon-close"
          />
        </Button>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nemo,
        aspernatur sequi repudiandae distinctio dolores facilis commodi quasi
        vel dicta modi neque placeat, quis ad nihil amet ut debitis veritatis.
        {children}
      </Content>
    </Overlay>,
    modalRoot,
  );
}
