
import { FC } from 'react';
import { CardContentProps } from './types';
import { StyledCardContent } from './CardContent.styled';

const CardContent: FC<CardContentProps> = ({ children, ...props }) => {
  return <StyledCardContent {...props}>{children}</StyledCardContent>;
};

export default CardContent;
