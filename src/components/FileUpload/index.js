import React from 'react';
import pdfIcon from '../../assets/icons/pdf-icon.png';
import wordIcon from '../../assets/icons/word-icon.png';
import './FileUpload.css';

const FileUpload = ({ file, handleFileDrop, handleFileRemove, dragOver, setDragOver, label, acceptedFileTypes, inputId }) => {
    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = () => {
        setDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        if (e.dataTransfer.files.length) {
            const file = e.dataTransfer.files[0];
            if (acceptedFileTypes.includes(file.type)) {
                handleFileDrop({ target: { files: e.dataTransfer.files } });
            } else {
                alert('Invalid file type. Only PDF and Word files are allowed.');
            }
        }
    };

    const renderFileIcon = (fileType) => {
        if (fileType === 'application/pdf') {
            return <img src={pdfIcon} alt="PDF" className="file-icon" />;
        } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || fileType === 'application/msword') {
            return <img src={wordIcon} alt="Word" className="file-icon" />;
        }
        return null;
    };

    return (
        <div
            className={`file-upload-container mt-25 mb-30 ${dragOver ? 'drag-over' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            style={{ height: '150px' }}
        >
            <input
                type="file"
                id={inputId} // Use the unique input ID here
                style={{ display: 'none' }}
                accept={acceptedFileTypes.join(',')}
                onChange={handleFileDrop}
            />
            {!file && (
                <label htmlFor={inputId} className="file-upload-label">
                    <span className="file-upload-text">{label}</span>
                </label>
            )}
            {file && (
                <div className="uploaded-file">
                    {renderFileIcon(file.type)}
                    <span className="file-name">{file.name}</span>
                    <button type="button" className="remove-file-btn" onClick={handleFileRemove}>×</button>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
