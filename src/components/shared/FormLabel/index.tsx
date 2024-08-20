
import { FC } from 'react';
import { FormLabelProps } from './types';
import { StyledFormLabel } from './FormLabel.styled';

const FormLabel: FC<FormLabelProps> = ({ children, ...props }) => {
  return <StyledFormLabel {...props}>{children}</StyledFormLabel>;
};

export default FormLabel;
