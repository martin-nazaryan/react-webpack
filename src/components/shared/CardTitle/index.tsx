
import { FC } from 'react';
import { CardTitleProps } from './types';
import { StyledCardTitle } from './CardTitle.styled';

const CardTitle: FC<CardTitleProps> = ({ children, ...props }) => {
  return <StyledCardTitle {...props}>{children}</StyledCardTitle>;
};

export default CardTitle;
