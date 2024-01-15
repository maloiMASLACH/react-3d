import styled, { css } from 'styled-components';

import { TransparencyType, constantsTransparency } from './modal-window.model';

export const Wrapper = styled.div<{
  transparency?: keyof TransparencyType;
  justifyContent?: string;
  alignItems?: string;
  isClosing?: boolean;
}>`
  ${({ justifyContent, alignItems, isClosing, transparency }) => {
    return css`
      z-index: 9999;
      margin: 0;
      top: 0;
      position: fixed;
      width: 100%;
      height: 100%;
      background: ${`rgba(0, 0, 0, ${
        constantsTransparency[(transparency as unknown as TransparencyType) || 'normal'] || '0.4'
      })`};
      overflow: hidden;

      opacity: ${isClosing ? '0' : '1'};
      transition: 0.5s;

      display: flex;
      margin: 0;
      justify-content: ${justifyContent ? justifyContent : 'center'};
      align-items: ${alignItems ? alignItems : 'center'};

      animation: modalWindow 0.5s;
      @keyframes modalWindow {
        0% {
          background: rgba(0, 0, 0, 0);
        }
        100% {
          background: rgba(0, 0, 0, 0.4);
        }
      }
    `;
  }}
`;

export const Content = styled.div`
  ${() => {
    return css`
      width: fit-content;
      z-index: 10000;
    `;
  }}
`;

export const BackGround = styled.div`
  ${() => {
    return css`
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 9999;
    `;
  }}
`;
