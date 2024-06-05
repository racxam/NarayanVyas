// components/BookProposalForm.js
import React, { useState } from 'react';
import shapeImg1 from '../../assets/img/contact/ct-shape-1.png';
import shapeImg2 from '../../assets/img/contact/ct-shape-2.png';
import shapeImg3 from '../../assets/img/contact/ct-shape-3.png';
import shapeImg4 from '../../assets/img/contact/ct-shape-4.png';
import './BookProposal.css';
import AuthorsSection from '../../components/AuthorsSection';
import FileUpload from '../../components/FileUpload';

const BookProposalForm = ({
    itemClass,
    books,
    chapters,
    authors,
    handleSubmit,
    handleAuthorChange,
    handleCorrespondingChange,
    handleAddAuthor,
    handleRemoveAuthor,
    handleFileDrop,
    handleFileRemove,
    file,
    loading,
    successMessage
}) => {
    const [dragOver, setDragOver] = useState(false);

    return (
        <div className={itemClass ? itemClass : 'contact__area contact__plr-2 mb-10 p-relative fix'}>
            <div className="contact__shape-1 d-none d-lg-block">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="contact__shape-2 d-none d-md-block">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="contact__shape-3 d-none d-md-block">
                <img src={shapeImg3} alt="" />
            </div>
            <div className="contact__shape-4 d-none d-md-block">
                <img src={shapeImg4} alt="" />
            </div>
            <div className="">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 col-lg-7">
                            <div className="contact__section-title pb-10">
                                <h4 className="section-subtitle char-anim">Submit Your Book Chapter Proposal</h4>
                                <h3 className="section-title char-anim">We are excited to hear your ideas!</h3>
                            </div>
                            {successMessage && (
                                <div className="success-message">
                                    {successMessage}
                                </div>
                            )}
                            <div className="contact__form wow animate__fadeInUp" data-wow-duration="1.1s">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="postbox__contact-input custom-select mb-30">
                                                <select name="book" required>
                                                    <option value="">Select Book</option>
                                                    {books.map(book => (
                                                        <option key={book.id} value={book.name}>{book.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="postbox__contact-input custom-select mb-30">
                                                <select name="chapter" required>
                                                    <option value="">Select Chapter</option>
                                                    {chapters.map(chapter => (
                                                        <option key={chapter.id} value={chapter.name}>{chapter.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="postbox__contact-input">
                                                <input type="text" name="suggestedTitle" placeholder="Suggested Chapter Title" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="postbox__contact-input">
                                                <input type="text" name="chapterSubtitles" placeholder="Chapter Subtitles" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="postbox__contact-input">
                                                <input type="text" name="keywords" placeholder="Keywords" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="postbox__contact-textarea">
                                                <textarea name="proposal" placeholder="Chapter Proposal" required></textarea>
                                            </div>
                                        </div>
                                        <AuthorsSection
                                            authors={authors}
                                            handleAuthorChange={handleAuthorChange}
                                            handleCorrespondingChange={handleCorrespondingChange}
                                            handleAddAuthor={handleAddAuthor}
                                            handleRemoveAuthor={handleRemoveAuthor}
                                        />
                                        <FileUpload
                                            file={file}
                                            handleFileDrop={handleFileDrop}
                                            handleFileRemove={handleFileRemove}
                                            dragOver={dragOver}
                                            setDragOver={setDragOver}
                                        />
                                        <div className="col-sm-12">
                                            <button type="submit" className="main-btn-sm tp-btn-hover alt-color">
                                                {loading ? <span className="loading-spinner"></span> : <span>Submit Proposal</span>}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookProposalForm;
