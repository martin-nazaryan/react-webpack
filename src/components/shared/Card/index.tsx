import { FC } from 'react';
import { CardProps } from './types';
import { StyledCard } from './Card.styled';

const Card: FC<CardProps> = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
