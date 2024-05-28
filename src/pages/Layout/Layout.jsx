import { Suspense } from 'react';
import { Outlet } from "react-router-dom";

import Header from '../../components/Header/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position='top-right' reverseOrder={false} /> */}
    </div>
  );
}

export default Layout;