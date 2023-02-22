import { CssBaseline } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <CssBaseline />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
