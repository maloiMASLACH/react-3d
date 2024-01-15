import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => {
    return css`
      display: flex;
      flex-direction: column;
      width: -webkit-fill-available;
      min-width: 100vw;
      height: 100%;
      min-height: 100vh;
      background-color: #000000;
      justify-content: center;
      align-items: center;
    `;
  }}
`;
