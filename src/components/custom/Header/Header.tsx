import { Link, NavLink } from 'react-router-dom';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const Header: FC<Props> = (props) => {
  return (
    <header className="bg-indigo-500 p-4" {...props}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-white text-xl font-bold">My App</h1>
        </Link>

        <nav className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return `${isActive ? 'bg-indigo-600' : 'hover:bg-indigo-400'} text-white px-3 py-2 rounded-md text-sm font-medium`;
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) => {
              return `${isActive ? 'bg-indigo-600' : 'hover:bg-indigo-400'} text-white px-3 py-2 rounded-md text-sm font-medium`;
            }}
          >
            Users
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
