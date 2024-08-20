import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Content: FC<Props> = ({ children }) => (
  <main className="container flex-1 p-4 overflow-auto">
    <div className="h-full">{children}</div>
  </main>
);

export default Content;
