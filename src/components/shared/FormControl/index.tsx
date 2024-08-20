
import { FC } from 'react';
import { FormControlProps } from './types';
import { StyledFormControl } from './FormControl.styled';

const FormControl: FC<FormControlProps> = ({ children, ...props }) => {
  return <StyledFormControl {...props}>{children}</StyledFormControl>;
};

export default FormControl;
