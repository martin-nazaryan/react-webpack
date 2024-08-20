import { Outlet } from 'react-router-dom';
import Header from '@/components/custom/Header/Header';
import Content from '../Content';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header>
        <h1 className="text-xl font-bold">My Application</h1>
      </Header>

      <Content>
        <Outlet />
      </Content>

      <Footer>
        <p>&copy; 2024 My Application</p>
      </Footer>
    </div>
  );
};

export default Layout;
