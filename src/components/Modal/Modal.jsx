import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Media from 'react-media';
import styled from 'styled-components';
import { closeModalWindow } from '../../redux/globalSlice';
import { modalBgCl, accentBgCl, size } from '../../stylesheet/utils/stylesVars';
import Icon from '../Icon';

const modalRoot = document.querySelector('#root-modal');

export default function Modal({ children, closeBtn }) {
  const dispatch = useDispatch();

  const onModalClose = e => {
    dispatch(closeModalWindow());
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onModalClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Content>
        <Media
          query="(min-width: 768px)"
          render={() => (
            <Button
              type="button"
              onClick={onModalClose}
              aria-label="close Modal Window"
            >
              <Icon
                width="16px"
                height="16px"
                stroke="currentColor"
                iconName="icon-close"
              />
            </Button>
          )}
        />

        {children}
      </Content>
    </Overlay>,
    modalRoot,
  );
}

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${modalBgCl};
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 10px 56px;
  background-color: ${accentBgCl};
  ${size.tablet} {
    width: 540px;
    padding: 40px 73px;
    border-radius: 20px;
  }
`;

const Button = styled.button`
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
`;

Modal.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
