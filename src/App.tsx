import './App.css';

import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import routes from './routes/routes';
import { theme } from '@/components/shared/constants';
import { store } from '@/store';

const router = createBrowserRouter(routes);

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
