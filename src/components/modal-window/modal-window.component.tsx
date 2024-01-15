import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import { ModalWindowProps } from './modal-window.model';
import { BackGround, Content, Wrapper } from './modal-window.styles';

export const ModalWindow: React.FC<ModalWindowProps> = ({
  children,
  transparency,
  alignItems,
  justifyContent,
  className,
  closeModal,
}) => {
  const [isClosing, setClosing] = useState(false);
  const handleClose = () => {
    if (closeModal) {
      setClosing(true);
      closeModal();
    }
  };

  const content = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = `hidden`;

    return () => {
      document.body.style.overflow = `auto`;
    };
  }, []);

  return ReactDOM.createPortal(
    <Wrapper
      alignItems={alignItems}
      justifyContent={justifyContent}
      transparency={transparency}
      isClosing={isClosing}
    >
      <BackGround onClick={handleClose} />
      <Content ref={content} className={className}>
        {children}
      </Content>
    </Wrapper>,
    document.body,
  );
};
