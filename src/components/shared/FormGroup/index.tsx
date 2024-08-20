
import { FC } from 'react';
import { FormGroupProps } from './types';
import { StyledFormGroup } from './FormGroup.styled';

const FormGroup: FC<FormGroupProps> = ({ children, ...props }) => {
  return <StyledFormGroup {...props}>{children}</StyledFormGroup>;
};

export default FormGroup;
