import { Outlet } from 'react-router-dom';
import GNB from '../components/GNB';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <div className="layout-wrapper">
      <GNB />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
