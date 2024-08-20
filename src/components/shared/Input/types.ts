import { InputHTMLAttributes } from 'react';
import { Variant } from '../types';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
}
