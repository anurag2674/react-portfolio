import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-10 right-0">
        <Header />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
