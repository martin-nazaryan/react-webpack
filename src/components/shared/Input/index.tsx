import { FC, forwardRef } from 'react';
import { InputProps } from './types';
import { StyledInput } from './Input.styles';

const Input: FC<InputProps> = forwardRef(({ ...props }, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

export default Input;
