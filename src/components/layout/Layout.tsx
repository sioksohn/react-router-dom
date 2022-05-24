import React, { Fragment } from "react";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
