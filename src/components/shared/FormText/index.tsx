
import { FC } from 'react';
import { FormTextProps } from './types';
import { StyledFormText } from './FormText.styled';

const FormText: FC<FormTextProps> = ({ children, ...props }) => {
  return <StyledFormText {...props}>{children}</StyledFormText>;
};

export default FormText;
