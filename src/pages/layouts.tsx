import React from 'react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import ContactActions from '@/components/ui/fixed-footer'; // <-- Your fixed footer component
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
    {/* Fixed contact buttons */}
    <ContactActions />
  </>
);

export default Layout;

