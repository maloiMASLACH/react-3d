import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { RouterLinks } from "../../constants";

import { SvgIcons } from "../../assets";

import { StyledModalWindow } from "../styled-modal-window";
import { menuLinks, socialLinks } from "./header.data";
import { AppLinkType, HeaderProps } from "./header.model";
import * as Styled from "./header.styles";

export const Header: React.FC<HeaderProps> = ({ variant }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const [isClosing, setClosing] = useState(false);

  const handleClosing = () => {
    setClosing(true);
  };

  const handleClose = () => {
    setOpen(false);
    setClosing(false);
  };

  const handleRedirect = ({ link, isSecond }: AppLinkType) => {
    handleClosing();
    window.scrollTo(0, isSecond ? window.innerHeight : 0);
    navigate(`..${link}`);
  };

  const handleClickLogo = () => {
    window.scrollTo(0, window.innerHeight);
    navigate(RouterLinks.Home);
  };

  return (
    <Styled.HeaderWrapper variant={variant}>
      <Styled.LeftBlock>
        <Styled.BurgerWrapper onClick={() => setOpen(true)}>
          <SvgIcons.Burger />
        </Styled.BurgerWrapper>

        <Styled.LogoBlock onClick={handleClickLogo}>
          {/* <Styled.LogoImgWrapper src={assets.images.headerLogo} />
          <Styled.LogoTextWrapper src={assets.images.headerTextLogo} /> */}
        </Styled.LogoBlock>
      </Styled.LeftBlock>
      <Styled.NavigateBlock>
        {/* <ConnectWalletButton /> */}
      </Styled.NavigateBlock>
      {isOpen && (
        <StyledModalWindow
          top="0"
          left="0"
          isClosingProcess={isClosing}
          handleClose={handleClose}
        >
          <Styled.MenuBlockWrapper>
            <Styled.MenuWrapper>
              <Styled.MenuTopWrapper>
                <Styled.MenuIconsWrapper>
                  <SvgIcons.Close onClick={handleClosing} />
                </Styled.MenuIconsWrapper>
                <Styled.MenuLinksWrapper>
                  {menuLinks.map((menuLink) => (
                    <>
                      {menuLink.link === location.pathname ? (
                        <Styled.MenuNavLink
                          key={menuLink.link}
                          onClick={handleClosing}
                          href={`#${menuLink.hash}`}
                        >
                          {menuLink.title}
                        </Styled.MenuNavLink>
                      ) : (
                        <Styled.MenuLink
                          key={menuLink.link}
                          onClick={() => handleRedirect(menuLink)}
                        >
                          {menuLink.title}
                        </Styled.MenuLink>
                      )}
                    </>
                  ))}
                </Styled.MenuLinksWrapper>
              </Styled.MenuTopWrapper>

              <Styled.MenuMediaWrapper>
                {socialLinks.map(({ link, Element }) => (
                  <a key={link} href={link} target="_blank" rel="noreferrer">
                    <Element />
                  </a>
                ))}
              </Styled.MenuMediaWrapper>
            </Styled.MenuWrapper>
          </Styled.MenuBlockWrapper>
        </StyledModalWindow>
      )}
    </Styled.HeaderWrapper>
  );
};
