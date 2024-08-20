import Layout from '@/components/custom/Layout';
import User from './User';
import Users from './Users';
import Home from './Home';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:id',
        element: <User />,
      },
    ],
  },
];

export default routes;
