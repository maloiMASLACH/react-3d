import styled, { css } from "styled-components";
import { Canvas } from "@react-three/fiber";

export const CanvasWrapper = styled(Canvas)`
  ${() => {
    return css`
      & canvas {
        width: -webkit-fill-available;
        min-width: 100vw;
        height: 100%;
        min-height: 50vh;
      }
    `;
  }}
`;
