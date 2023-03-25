import React from "react";
import style from "./mainLayout.module.css";

const MainLayout = ({ children }) => {
  return <div className={style.mainLayout}>{children}</div>;
};

export default MainLayout;
