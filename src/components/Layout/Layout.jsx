import React from "react";
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This is where the child route components will be rendered */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
