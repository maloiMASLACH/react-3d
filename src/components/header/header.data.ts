import { RouterLinks, socialLinksConstant } from "../../constants";

import { SvgIcons } from "../../assets";
import { AppLinkType } from "./header.model";

export const menuLinks: AppLinkType[] = [
  {
    title: "Home",
    link: `${RouterLinks.Home}`,
  },
  { title: "Dragon", link: RouterLinks.Dragon },
  { title: "Ball", link: RouterLinks.Ball },
];

export const socialLinks = [
  { Element: SvgIcons.Facebook, link: socialLinksConstant.facebook },
  { Element: SvgIcons.Discord, link: socialLinksConstant.discord },
  { Element: SvgIcons.Twitter, link: socialLinksConstant.twitter },
  { Element: SvgIcons.YouTube, link: socialLinksConstant.youtube },
  { Element: SvgIcons.Instagram, link: socialLinksConstant.instagram },
];

export const headerTexts = "connect wallet";
