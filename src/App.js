import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Memo from "./components/memo/Memo";
import { useStickyState } from "./utils";
import Modal from "./components/modal/Modal";

function App() {
  const [text, setText] = useState("");
  const [memos, setMemos] = useStickyState([], "memos");
  const [modalVisible, setModalVisible] = useState(false);
  const [dayConfirmed, setDayConfirmed] = useState(false);
  const handleAddMemo = (e) => {
    let newMemo = {
      id: uuidv4(),
      name: text,
      completed: false,
    };
    setMemos([...memos, newMemo]);
    e.currentTarget.value = "";
  };
  const handleSelect = (id) => {
    const newMemos = memos.map((memo) => {
      if (memo.id === id) {
        return {
          ...memo,
          completed: !memo.completed,
        };
      }
      return memo;
    });
    setMemos(newMemos);
  };
  const handleTriggerModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleConfirm = () => {
    setDayConfirmed(true);
  };
  const handleReset = () => {
    setModalVisible(false);
    setDayConfirmed(false);
    setMemos([]);
  };

  return (
    <div className="App">
      <div className="input-conatiner">
        <input
          type="text"
          placeholder="Write memo..."
          className="memo-input"
          onChange={(e) => setText(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddMemo(e);
            }
          }}
        />
        <button className="end-day-button" onClick={handleTriggerModal}>End day</button>
      </div>
      {modalVisible && (
        <Modal
          memos={memos}
          dayConfirmed={dayConfirmed}
          handleTriggerModal={handleTriggerModal}
          handleConfirm={handleConfirm}
          handleReset={handleReset}
        />
      )}
      <div>
        {memos.map((memo) => (
          <Memo key={memo.id} {...memo} handleSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
}

export default App;
