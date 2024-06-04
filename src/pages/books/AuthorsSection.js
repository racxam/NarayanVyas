import React from 'react';
import AuthorDetails from './AuthorDetails';

const AuthorsSection = ({
    authors,
    handleAuthorChange,
    handleCorrespondingChange,
    handleAddAuthor,
    handleRemoveAuthor
}) => {
    return (
        <>
            {authors.map((author, index) => (
                <AuthorDetails
                    key={index}
                    index={index}
                    author={author}
                    handleAuthorChange={handleAuthorChange}
                    handleCorrespondingChange={handleCorrespondingChange}
                    handleRemoveAuthor={handleRemoveAuthor}
                    canRemove={authors.length > 1}
                    canAdd={index === authors.length - 1 && authors.length < 6}
                    handleAddAuthor={handleAddAuthor}
                />
            ))}
        </>
    );
}

export default AuthorsSection;
