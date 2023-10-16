import React, { useState } from "react";
import "./modal.css";
import { XCircle } from "@phosphor-icons/react";

const Modal = ({ openModal }) => {
  if (openModal) {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
  }

  const closeModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  };

  return (
    <div id="modal" className="modal">
      <div className="modal-content">
        <div className="close">
          <XCircle
            onClick={closeModal}
            className="close-icon"
            size={32}
            color="#d95d39"
          />
        </div>
        <div className="modal-phrases">
          <p>Modal Text</p>
        </div>
        <div className="modal-buttons"></div>
      </div>
    </div>
  );
};

export default Modal;
