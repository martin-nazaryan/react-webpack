import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Variant } from '../types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}
