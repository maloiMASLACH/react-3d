import React from 'react';
import { TransparencyType } from '../modal-window/modal-window.model';

export interface ModalWindowProps {
  children?: React.ReactElement | React.ReactElement[];
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  className?: string;
  isClosingProcess: boolean;
  visible?: boolean;
  notAnimated?: boolean;
  transparency?: keyof TransparencyType;
  reverseAnimation?: boolean;
  handleClose?: () => void;
}
