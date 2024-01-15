import React, { useEffect, useState } from 'react';

import { ModalWindow } from '..';
import { ModalWindowProps } from './styled-modal-window.model';
import { Content, Wrapper } from './styled-modal-window.styles';

export const StyledModalWindow: React.FC<ModalWindowProps> = ({
  children,
  top,
  right,
  bottom,
  left,
  transparency,
  className,
  isClosingProcess,
  handleClose,
  visible,
  notAnimated,
  reverseAnimation,
}) => {
  const [isClosing, setClosing] = useState(false);

  const handleSmoothCLose = async () => {
    setClosing(true);
    setTimeout(() => {
      handleClose && handleClose();
    }, 500);
  };

  useEffect(() => {
    if (isClosingProcess) {
      handleSmoothCLose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClosingProcess]);

  return (
    <>
      <ModalWindow transparency={transparency} closeModal={handleSmoothCLose}>
        <Wrapper
          className={className}
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          isClosing={isClosing}
          notAnimated={notAnimated}
          reverseAnimation={reverseAnimation}
        >
          <Content scrollable={!!visible}>{children}</Content>
        </Wrapper>
      </ModalWindow>
    </>
  );
};
