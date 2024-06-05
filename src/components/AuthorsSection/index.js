import React from 'react';

const AuthorsSection = ({ authors, handleAuthorChange, handleCorrespondingChange, handleAddAuthor, handleRemoveAuthor }) => {
    return (
        <>
            {authors.map((author, index) => (
                <div className={`col-sm-12 author-box ${author.isCorresponding ? 'corresponding-author' : ''}`} key={index}>
                    <div className={`row author-header align-items-center ${author.isCorresponding ? 'corresponding-author-header' : 'non-corresponding-author-header'}`} style={{ backgroundColor: '#FFF1CD' }}>
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
                                    style={{ fontSize: '20px' }}
                                >
                                    -
                                </button>
                            )}
                            {index === authors.length - 1 && authors.length < 6 && (
                                <button
                                    type="button"
                                    className="btn btn-success author-btn"
                                    onClick={handleAddAuthor}
                                    style={{ fontSize: '20px' }}
                                >
                                    +
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
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
                        <div className="col-sm-4">
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
                        <div className="col-sm-4">
                            <div className="postbox__contact-input">
                                <input
                                    type="text"
                                    name={`authorPhone-${index}`}
                                    placeholder="Phone Number"
                                    value={author.phone}
                                    onChange={(e) => handleAuthorChange(index, 'phone', e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
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
                        <div className="col-sm-4">
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
                        <div className="col-sm-4">
                            <div className="postbox__contact-input">
                                <input
                                    type="text"
                                    name={`authorCountry-${index}`}
                                    placeholder="Country"
                                    value={author.country}
                                    onChange={(e) => handleAuthorChange(index, 'country', e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default AuthorsSection;
