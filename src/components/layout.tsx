import React from "react";
import "normalize.css";
import { Helmet } from "react-helmet";

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </>
  );
}

export default Layout;
