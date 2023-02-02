import React from "react";
import style from "./modal-overlay.module.css";

const ModalOverlay = (props) => {
  return (
    <div
      className={style.overflow}
      onClick={() => {
        props.setIsModalOpen(false);
      }}
    ></div>
  );
};

export default ModalOverlay;
