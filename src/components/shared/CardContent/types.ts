
import { HTMLAttributes, ReactNode } from 'react';

export interface CardContentProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}
