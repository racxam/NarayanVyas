// BookProposalForm.js
import React from 'react';
import shapeImg1 from '../../assets/img/contact/ct-shape-1.png';
import shapeImg2 from '../../assets/img/contact/ct-shape-2.png';
import shapeImg3 from '../../assets/img/contact/ct-shape-3.png';
import shapeImg4 from '../../assets/img/contact/ct-shape-4.png';
import './BookProposal.css'; // Import the CSS file

const BookProposalForm = ({
    itemClass,
    books,
    chapters,
    authors,
    handleSubmit,
    handleAuthorChange,
    handleCorrespondingChange,
    handleAddAuthor,
    handleRemoveAuthor
}) => {
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
                                <h4 className="section-subtitle char-anim">Submit a Book Proposal</h4>
                                <h3 className="section-title char-anim">We are excited to hear your ideas!</h3>
                            </div>
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
                                        {authors.map((author, index) => (
                                            <div className={`col-sm-12 author-box ${author.isCorresponding ? 'corresponding-author' : ''}`} key={index}>
                                                <div className={`row author-header align-items-center ${author.isCorresponding ? 'corresponding-author-header' : 'non-corresponding-author-header'}`}>
                                                    <div className="col-sm-10 d-flex align-items-center">
                                                        <h5>Author {index + 1}</h5>
                                                        <label className="corresponding-label">
                                                            <input
                                                                type="checkbox"
                                                                checked={author.isCorresponding}
                                                                onChange={() => handleCorrespondingChange(index)}
                                                            />
                                                            (Corresponding)
                                                        </label>
                                                    </div>
                                                    <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                                        {authors.length > 1 && (
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger author-btn"
                                                                onClick={() => handleRemoveAuthor(index)}
                                                            >
                                                                -
                                                            </button>
                                                        )}
                                                        {index === authors.length - 1 && authors.length < 6 && (
                                                            <button
                                                                type="button"
                                                                className="btn btn-success author-btn"
                                                                onClick={handleAddAuthor}
                                                            >
                                                                +
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="postbox__contact-input">
                                                            <input
                                                                type="text"
                                                                name={`authorName-${index}`}
                                                                placeholder="Author Name"
                                                                value={author.name}
                                                                onChange={(e) => handleAuthorChange(index, 'name', e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="postbox__contact-input">
                                                            <input
                                                                type="email"
                                                                name={`authorEmail-${index}`}
                                                                placeholder="Author Email"
                                                                value={author.email}
                                                                onChange={(e) => handleAuthorChange(index, 'email', e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="postbox__contact-input">
                                                            <input
                                                                type="text"
                                                                name={`authorDepartment-${index}`}
                                                                placeholder="Department"
                                                                value={author.department}
                                                                onChange={(e) => handleAuthorChange(index, 'department', e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="postbox__contact-input">
                                                            <input
                                                                type="text"
                                                                name={`authorInstitution-${index}`}
                                                                placeholder="Institution"
                                                                value={author.institution}
                                                                onChange={(e) => handleAuthorChange(index, 'institution', e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="col-sm-12">
                                            <button type="submit" className="main-btn-sm tp-btn-hover alt-color"><span>Submit Proposal</span></button>
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
