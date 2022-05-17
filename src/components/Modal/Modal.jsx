import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { closeModalWindow } from '../../redux/globalSlice';
import { modalBgCl, accentBgCl, size } from '../../stylesheet/utils/stylesVars';
import Icon from '../Icon';

const modalRoot = document.querySelector('#root-modal');

export default function Modal({ children, closeBtn }) {
  const dispatch = useDispatch();

  const onModalClose = e => {
    console.log('close');
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
        <Button
          type="button"
          onClick={onModalClose}
          aria-label="close Modal Window"
          closeBtn={closeBtn}
        >
          <Icon
            width="16px"
            height="16px"
            stroke="currentColor"
            iconName="icon-close"
          />
        </Button>
        {children}
      </Content>
    </Overlay>,
    modalRoot,
  );
}

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
  width: 320px;
  padding: 20px 10px 56px;
  background-color: ${accentBgCl};
  border-radius: 20px;
  ${size.tablet} {
    width: 540px;
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

Modal.propTypes = {
  closeBtn: PropTypes.string,
};
