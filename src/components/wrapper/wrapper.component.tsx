import React from "react";
import { Wrapper } from "./wrapper.styles";
import { WrapperProps } from "./wrapper.model";

export const WrapperComponent: React.FC<WrapperProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
