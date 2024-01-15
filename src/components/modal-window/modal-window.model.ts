import React from 'react';

export interface ModalWindowProps {
  children: React.ReactElement | React.ReactElement[];
  transparency?: keyof TransparencyType;
  alignItems?: string;
  justifyContent?: string;
  className?: string;
  closeModal?: () => void;
}

export enum TransparencyType {
  Full = 'full',
  Half = 'half',
  None = 'none',
  Normal = 'normal',
}

export const constantsTransparency: { [key in TransparencyType]: string } = {
  full: '0',
  half: '0.7',
  none: '0',
  normal: '0.4',
};
