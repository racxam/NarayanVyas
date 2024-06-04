import React from 'react';

const AuthorDetails = ({
    index,
    author,
    handleAuthorChange,
    handleCorrespondingChange,
    handleRemoveAuthor,
    canRemove,
    canAdd,
    handleAddAuthor
}) => {
    return (
        <div className={`col-sm-12 author-box ${author.isCorresponding ? 'corresponding-author' : ''}`}>
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
                    {canRemove && (
                        <button
                            type="button"
                            className="btn btn-danger author-btn"
                            onClick={() => handleRemoveAuthor(index)}
                        >
                            -
                        </button>
                    )}
                    {canAdd && (
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
    );
}

export default AuthorDetails;
