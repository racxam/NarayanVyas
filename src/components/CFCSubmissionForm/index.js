import React from 'react';
import AuthorsSection from '../AuthorsSection';

const CFCSubmissionForm = ({
    itemClass,
    chapters,
    authors,
    handleSubmit,
    handleAuthorChange,
    handleCorrespondingChange,
    handleAddAuthor,
    handleRemoveAuthor,
    loading,
    successMessage,
    errorMessage, // Accept the error message as a prop
    bookTitle,
    clearMessages // Accept the clearMessages function as a prop
}) => {
    return (
        <div className={itemClass ? itemClass : 'contact__area contact__plr-2 mb-10 p-relative fix'}>
            <div className="modal-main-body">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8 col-lg-7">
                        <div className="contact__section-title pb-10">
                            <h4 className="section-subtitle char-anim">Submit Your Abstract</h4>
                            <h3 className="section-title char-anim">We are excited to hear your ideas!</h3>
                            <p className="section-note mb-20 mt-10">
                                Kindly choose a chapter from the list. You can modify the chapter title slightly to better fit your content. (If you don't find your chapter, you can choose "Other")
                            </p>
                            <h5 className="book-title">Book: {bookTitle}</h5> {/* Display the book title */}
                        </div>
                        <div className="contact__form wow animate__fadeInUp" data-wow-duration="1.1s">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="postbox__contact-input custom-select mb-10">
                                            <select name="chapter" required>
                                                <option value="">Select Chapter</option>
                                                {chapters.map((chapter, index) => (
                                                    <option key={index} value={chapter.title}>Chapter {index + 1}: {chapter.title}</option>
                                                ))}
                                                <option value="Other">Other</option>
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
                                    {successMessage && (
                                        <div className="col-sm-12">
                                            <div className="alert alert-success">
                                                <span>{successMessage}</span>
                                                <button type="button" className="close" onClick={clearMessages}>&times;</button>
                                            </div>
                                        </div>
                                    )}
                                    {errorMessage && (
                                        <div className="col-sm-12">
                                            <div className="alert alert-danger">
                                                <span>{errorMessage}</span>
                                                <button type="button" className="close" onClick={clearMessages}>&times;</button>
                                            </div>
                                        </div>
                                    )}
                                    <div className="col-sm-12">
                                        <button type="submit" className="main-btn-sm tp-btn-hover alt-color">
                                            {loading ? <span className="loading-spinner"></span> : <span>Submit Abstract</span>}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CFCSubmissionForm;
