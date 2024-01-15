export interface HeaderProps {
  variant: headerVariant;
}

export interface AppLinkType {
  title: string;
  link: string;
  hash?: string;
  isSecond?: boolean;
}

export type headerVariant = 'transparent' | 'filled';
