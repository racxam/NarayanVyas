import React from 'react';
import pdfIcon from '../../assets/icons/pdf-icon.png'; // Add path to your PDF icon
import wordIcon from '../../assets/icons/word-icon.png'; // Add path to your Word icon

const FileUpload = ({
    file,
    handleFileDrop,
    handleFileRemove,
    dragOver,
    setDragOver
}) => {
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
            handleFileDrop({ target: { files: e.dataTransfer.files } });
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
        <div className="col-sm-12">
            <div
                className={`file-upload-container mt-25 mb-30 ${dragOver ? 'drag-over' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                style={{ height: '150px' }}
            >
                <input
                    type="file"
                    id="file-upload"
                    style={{ display: 'none' }}
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileDrop}
                />
                {!file && (
                    <label htmlFor="file-upload" className="file-upload-label">
                        <span className="file-upload-text">Drag & drop or click to upload file</span>
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
        </div>
    );
}

export default FileUpload;
