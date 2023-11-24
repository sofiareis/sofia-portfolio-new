import React, { ReactNode } from 'react';
import Navbar from 'components/navbar/Navbar';
import Footer from 'components/footer/Footer';
import Page from 'components/page/Page';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Page>
    <Navbar />
      {children}
    <Footer />
  </Page>
);

export default Layout;