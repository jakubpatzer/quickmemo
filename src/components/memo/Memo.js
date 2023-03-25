import React from "react";
import style from "./memo.module.css";

const Memo = ({ name, id, completed, handleSelect }) => {
  return (
    <div className={style.memoContainer} onClick={() => handleSelect(id)}>
      <span className={`${completed && style.completed}`}>{name}</span>
    </div>
  );
};

export default Memo;
