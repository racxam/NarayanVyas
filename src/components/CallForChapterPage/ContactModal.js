// ContactModal.js
import React from 'react';
import Modal from 'react-modal';
import BookProposalForm from '../../pages/books/BookProposalForm';

Modal.setAppElement('#root');

const ContactModal = ({ isOpen, onRequestClose, books, chapters, authors, handleSubmit, handleAuthorChange, handleCorrespondingChange, handleAddAuthor, handleRemoveAuthor, handleFileDrop, handleFileRemove, file, loading, successMessage }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Contact Form"
            className="modal"
            overlayClassName="modal-overlay"
        >
            <button className="close-modal-btn" onClick={onRequestClose}>×</button>
            <BookProposalForm
                books={books}
                chapters={chapters}
                authors={authors}
                handleSubmit={handleSubmit}
                handleAuthorChange={handleAuthorChange}
                handleCorrespondingChange={handleCorrespondingChange}
                handleAddAuthor={handleAddAuthor}
                handleRemoveAuthor={handleRemoveAuthor}
                handleFileDrop={handleFileDrop}
                handleFileRemove={handleFileRemove}
                file={file}
                loading={loading}
                successMessage={successMessage}
            />
        </Modal>
    );
};

export default ContactModal;
