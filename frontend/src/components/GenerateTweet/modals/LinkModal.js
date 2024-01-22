// LinkModal.js
import React from 'react';
import Modal from 'react-modal';
import { InputGroup, Button } from "@blueprintjs/core";
import "./Modal.css";

function LinkModal({ isOpen, onRequestClose, newLink, setNewLink, addLink }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Link Modal"
      className="modal-container"
    >
      <h2 className="modal-title">Add Link</h2>
      <InputGroup
        type="text"
        placeholder="Enter the URL for the link"
        value={newLink}
        onChange={(e) => setNewLink(e.target.value)}
        className="modal-input"
      />
      <Button onClick={addLink} className="modal-button">Add</Button>
      <Button onClick={onRequestClose} className="modal-button">Cancel</Button>
    </Modal>
  );
}

export default LinkModal;
