import React from "react";
import style from "./modal.module.css";

const Modal = ({
  memos,
  dayConfirmed,
  handleTriggerModal,
  handleConfirm,
  handleReset,
}) => {
  const completedMemos = memos.filter((memo) => memo.completed).length;
  const result = Math.round((completedMemos / memos.length) * 100);
  const showResults = () => {
    if (result === 0) return "Naughty...";
    if (result > 0 && result < 50) return "Bad...";
    if (result >= 50 && result < 75) return "Good, but could be better :)";
    if (result >= 75 && result < 100) return "Nearly perfect :)";
    if (result === 100) return "Perfect <3";
  };
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        {!dayConfirmed ? (
          <>
            <p className={style.modalText}>End quickmemo day?</p>
            <div>
              <button className={style.modalButton} onClick={handleConfirm}>
                Sure
              </button>
              <button
                className={style.modalButton}
                onClick={handleTriggerModal}
              >
                Not sure yet
              </button>
            </div>
          </>
        ) : (
          <>
            <p className={style.modalText}>
              Youre score is {completedMemos} / {memos.length}
            </p>
            <p className={style.modalText}>{showResults()}</p>
            <div>
              <button className={style.modalButton} onClick={handleReset}>
                All done
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
