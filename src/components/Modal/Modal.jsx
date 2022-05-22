import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { useDispatch } from 'react-redux';
import Icon from '../Icon';
import { closeModalWindow } from '../../redux/globalSlice';
import {
  modalBgCl,
  accentBgCl,
  size,
  timingFunc,
} from '../../stylesheet/utils/stylesVars';
import styled from 'styled-components';

const modalRoot = document.querySelector('#root-modal');

export default function Modal({
  children,
  height,
  heightContent,
  width,
  padding,
  paddingTab,
}) {
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
    <Overlay onClick={handleBackdropClick} height={height}>
      <Content
        heightContent={heightContent}
        width={width}
        padding={padding}
        paddingTab={paddingTab}
      >
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
  background-color: ${accentBgCl};
  height: ${p => p.height || 'calc(100vh - 60px)'};
  ${size.tablet} {
    height: 100vh;
    background-color: ${modalBgCl};
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${p => p.width || '100%'};
  height: ${p => p.heightContent || 'calc(100vh - 60px)'};
  transform: translate(-50%, -50%);
  padding: ${p => p.padding || '20px 10px 0px'};
  background-color: ${accentBgCl};
  overflow-y: auto;
  ${size.tablet} {
    width: 540px;
    height: auto;
    padding: ${p => p.paddingTab || '40px 73px 0px'};
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
  transform: rotateZ(360deg);
  transition: transform 0.25s ${timingFunc};
  &:hover,
  &:focus {
    transform: rotateZ(0deg);
  }
`;

Modal.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  height: PropTypes.string,
  heightContent: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  paddingTab: PropTypes.string,
};
