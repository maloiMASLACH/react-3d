import styled, { css } from 'styled-components';

import { headerVariant } from './header.model';

export const HeaderWrapper = styled.div<{ variant: headerVariant }>`
  ${({ variant }) => {
    const bgVariant: { [key in headerVariant]: string } = {
      transparent: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
      filled: '#212121',
    };

    return css`
      display: flex;
      padding: 0 45px;
      width: -webkit-fill-available;
      height: 131px;
      position: fixed;
      background: ${bgVariant[variant]};
      z-index: 1000;
      top: 0;
      align-items: center;
      justify-content: space-between;
    `;
  }}
`;

export const LeftBlock = styled.div`
  ${() => {
    return css`
      display: flex;
      gap: 35px;
      align-items: center;
    `;
  }}
`;

export const BurgerWrapper = styled.div`
  ${() => {
    return css`
      border-radius: 50%;
      width: 75px;
      height: 75px;
      &:hover {
        background: #ffa612;
      }
    `;
  }}
`;

export const LogoBlock = styled.div`
  ${() => {
    return css`
      display: flex;
      align-items: center;

      cursor: pointer;
    `;
  }}
`;

export const LogoImgWrapper = styled.img`
  ${() => {
    return css`
      width: 57px;
      height: 63px;
    `;
  }}
`;

export const LogoTextWrapper = styled.img`
  ${() => {
    return css`
      width: 276px;
      height: 95px;
    `;
  }}
`;

export const NavigateBlock = styled.div`
  ${() => {
    return css`
      display: flex;
      gap: 30px;
    `;
  }}
`;

export const MenuBlockWrapper = styled.div`
  ${() => {
    return css`
      display: flex;
      justify-content: space-between;
      width: 671px;
      height: 100vh;
      background: #212121;
    `;
  }}
`;

export const MenuWrapper = styled.div`
  ${() => {
    return css`
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between;
      padding: 37px 57px 107px 57px;
    `;
  }}
`;

export const MenuTopWrapper = styled.div`
  ${() => {
    return css`
      display: flex;
      flex-direction: column;
      gap: 115px;
    `;
  }}
`;

export const MenuIconsWrapper = styled.div`
  ${() => {
    return css`
      display: flex;
      gap: 22px;

      & > svg {
        cursor: pointer;
        transition: 0.5s;
      }

      & > svg:hover {
        cursor: pointer;
        transform: scale(1.2);
        & path {
          fill: #ffa612 !important;
        }
      }
    `;
  }}
`;

export const MenuLinksWrapper = styled.div`
  ${() => {
    return css`
      display: flex;
      flex-direction: column;
      gap: 24px;
    `;
  }}
`;

export const MenuLink = styled.p`
  ${() => {
    return css`
      padding: 0 5px;
      margin: 0;
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
      color: #ffffff;
      cursor: pointer;
      width: fit-content;
      border-radius: 14px;
      transition: 0.5s;

      &:hover {
        background: #ffa612;
      }
    `;
  }}
`;

export const MenuNavLink = styled.a`
  ${() => {
    return css`
      text-decoration: none;
      padding: 0 5px;
      margin: 0;
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
      color: #ffffff;
      cursor: pointer;
      width: fit-content;
      border-radius: 14px;
      transition: 0.5s;

      &:hover {
        background: #ffa612;
      }
    `;
  }}
`;

export const MenuMediaWrapper = styled.div`
  ${() => {
    return css`
      width: 100%;
      justify-content: center;
      display: flex;
      gap: 15px;

      & svg {
        width: 50px;
        height: 50px;
        cursor: pointer;
        transition: 0.5s;
      }

      & svg:hover {
        cursor: pointer;
        transform: scale(1.2);
        & path {
          fill: #ffa612 !important;
        }
        & ellipse {
          fill: #ffa612 !important;
        }
        & circle {
          fill: #ffa612 !important;
        }
      }
    `;
  }}
`;
