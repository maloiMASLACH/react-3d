import styled, { css } from "styled-components";

export const Wrapper = styled.div<{
  isClosing?: boolean;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  notAnimated?: boolean;
  reverseAnimation?: boolean;
}>`
  ${({
    top,
    right,
    bottom,
    left,
    isClosing,
    notAnimated,
    reverseAnimation,
  }) => {
    return css`
      margin: auto;
      width: fit-content;
      height: fit-content;
      position: absolute;
      top: ${top ? `${top}px` : "auto"};
      right: ${right ? `${right}px` : "auto"};
      bottom: ${bottom ? `${bottom}px` : "auto"};
      left: ${left ? `${left}px` : "auto"};
      display: flex;
      flex-direction: column;

      ${!notAnimated &&
      `  
      opacity: ${isClosing ? "0" : "1"};
      transform: ${isClosing ? `translate(${reverseAnimation ? '+' : '-'}110%)` : 'translate(0%)'};
      transition: 0.2s;

      animation: ${
        reverseAnimation
          ? "styledModalWindowContentReverse"
          : "styledModalWindowContent"
      } 0.2s;
      @keyframes styledModalWindowContent {
        0% {
          transform: translate(-110%);
        }
        100% {
          transform: translate(0%);
        }
      }
      
      @keyframes styledModalWindowContentReverse {
        0% {
          transform: translate(+110%);
        }
        100% {
          transform: translate(0%);
        }
      }

      `}
    `;
  }}
`;

export const Content = styled.div<{ scrollable: boolean }>`
  ${({ scrollable }) => {
    return css`
      ${!scrollable
        ? `
        overflow-y: scroll;
        overflow-x: hidden;

        &::-webkit-scrollbar {
        display: none;
        }
      `
        : undefined}
    `;
  }}
`;
