import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const Footer: FC<Props> = ({ className = '', ...props }) => (
  <footer className={`bg-indigo-500 p-4 text-center text-white border-t border-gray-200 ${className}`} {...props} />
);

export default Footer;
