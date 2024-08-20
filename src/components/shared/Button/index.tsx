import { FC } from 'react';
import { ButtonProps } from './types';
import { StyledButton } from './Button.styles';

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
