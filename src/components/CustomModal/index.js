import React from 'react';
import Modal from 'react-modal';

import './Modal.css';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        position: 'relative',
        background: 'white',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        maxHeight: '85%',
        maxWidth: '80%',
        width: 'auto',
        boxSizing: 'border-box',
    }
};

const CustomModal = ({ isOpen, onRequestClose, contentLabel, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel={contentLabel}
        >
            <div className="modal-header">
                <button onClick={onRequestClose} className="close-button">×</button>
            </div>
            <div className="modal-content">
                {children}
            </div>
        </Modal>
    );
}

export default CustomModal;