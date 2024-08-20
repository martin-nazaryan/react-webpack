
import { LabelHTMLAttributes, ReactNode } from 'react';

export interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}
