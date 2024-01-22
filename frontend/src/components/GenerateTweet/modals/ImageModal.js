// ImageModal.js
import React from 'react';
import Modal from 'react-modal';
import { InputGroup, Button } from "@blueprintjs/core";
import "./Modal.css";


function ImageModal({ isOpen, onRequestClose, newImage, setNewImage, addImage }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Image Modal"
      className="modal-container"
    >
      <h2 className="modal-title">Add Image</h2>
      <InputGroup
        type="text"
        placeholder="Enter the URL for the image"
        value={newImage}
        onChange={(e) => setNewImage(e.target.value)}
        className="modal-input"
      />
      <Button onClick={addImage} className="modal-button">Add</Button>
      <Button onClick={onRequestClose} className="modal-button">Cancel</Button>
    </Modal>
  );
}

export default ImageModal;
