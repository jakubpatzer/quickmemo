import React from "react";
import style from "./memo.module.css";

const Memo = ({ name, id, completed, handleSelect, handleDeleteMemo }) => {
  return (
    <div className={style.memoContainer}>
      <button
        className={style.deleteButton}
        onClick={() => handleDeleteMemo(id)}
      >
        x
      </button>
      <div onClick={() => handleSelect(id)}>
        <span className={`${completed && style.completed}`}>{name}</span>
      </div>
    </div>
  );
};

export default Memo;
