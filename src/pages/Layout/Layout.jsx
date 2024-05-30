import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import css from './Layout.module.css';
import Header from '../../components/Header/Header';

const Layout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
}

export default Layout;