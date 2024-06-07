import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const BookDetailsPage = ({
    title,
    price,
    publisher,
    publisherLink,
    editors,
    releaseDate,
    copyright,
    language,
    categories,
    doi,
    isbn,
    indexIn,
    isPublished,
    descriptionParagraphs,
    chapters,
    editorOrder,
    editorsBiographies
}) => {
    const tabStyle = 'nav nav-tabs pro-details-nav-btn';
    // 
    return ( 
        <div className="product-details__plr mt-100 mb-0">
            <div className="container">
                <div className="row mb-50">
                    <div className="col-xl-6 col-lg-6 col-md-6 wow animate__fadeInLeft" data-wow-duration="1.1s">
                        <div className="product-details__main-img pb-20">
                            <img src={title.image} alt={title.text} className='br-10' />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="product-details__left-side">
                            <h4 className="product-details__left-title wow animate__fadeInUp" data-wow-duration="1.1s">{title.text}</h4>
                            <h5 className="wow animate__fadeInUp" data-wow-duration="1.1s">Price: <span>{price}</span> | Publisher: <span><a href={publisherLink} target='_blank' rel='noreferrer'>{publisher}</a></span></h5>
                            <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Editors:&nbsp;
                                {editorOrder.map((editorId, index) => {
                                    const editor = editorsBiographies.find(ed => ed.id === editorId);
                                    return (
                                        <span key={editorId}>
                                            <a href={editor.profileLink} target='_blank' rel='noreferrer'>{editor.name}</a>{index < editorOrder.length - 1 && ', '}
                                        </span>
                                    );
                                })}
                            </p>
                            <p className="wow animate__fadeInUp" data-wow-duration="1.1s">{isPublished ? 'Release Date:' : 'Projected Release Date:'} {releaseDate} | Copyright: {copyright} | Language: {language} | Categories: {categories.join(', ')}</p>
                            <p className="wow animate__fadeInUp" data-wow-duration="1.1s">
                                ISBN: {isbn}
                                {!isPublished && (
                                    <span className="coming-soon-badge__two">Coming Soon</span>
                                )}
                                {isPublished && <> | DOI: <a href={`https://doi.org/${doi}`} target='_blank' rel='noreferrer' style={{ color: 'blue' }}>{doi}</a></>}
                            </p>
                            {descriptionParagraphs.map((paragraph, index) => (
                                <p key={index} className="wow animate__fadeInUp" data-wow-duration="1.1s">{paragraph}</p>
                            ))}
                            <a className="yellow-btn tp-btn-hover alt-color mt-20 wow animate__fadeInUp" data-wow-duration="1.1s" target='_blank' rel='noreferrer' href={publisherLink}><span>{isPublished ? 'Buy Now' : 'Preorder Now'}</span><b></b></a>
                            <div className="product-details__social-box mt-35 wow animate__fadeInUp" data-wow-duration="1.1s">
                                <span>Share:</span>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="productdetails-tabs mb-100">
                        <div className="row justify-content-center">
                            <div className="col-xl-12 col-lg-12 col-12">
                                <Tabs>
                                    <div className="product-additional-tab">
                                        <div className="pro-details-nav mb-40">
                                            <TabList className={tabStyle}>
                                                <Tab><button className="nav-links"><span>Table of Contents</span></button></Tab>
                                                <Tab><button className="nav-links"><span>Editor's Biographies</span></button></Tab>
                                            </TabList>
                                        </div>
                                        <div className="tab-content tp-content-tab" id="myTabContent-2">
                                            <TabPanel>
                                                <ul>
                                                    {chapters.map((chapter, index) => (
                                                        <li key={index} style={{ listStyle: "none", padding: "15px", border: "1px solid #ddd", marginBottom: "10px", borderRadius: "5px" }}>
                                                            <p style={{ fontSize: "16px", marginBottom: "5px" }}><strong>Chapter {chapter.index}:</strong> {chapter.title}</p>
                                                            <p style={{ fontSize: "16px" }}><strong>Authors:</strong> {chapter.authors.join(', ')}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </TabPanel>
                                            <TabPanel>
                                                {editorOrder.map((editorId, index) => {
                                                    const editor = editorsBiographies.find(ed => ed.id === editorId);
                                                    return (
                                                        <p key={editorId}><b>{editor.name}</b> {editor.bio} <a href={editor.profileLink} target='_blank' rel='noreferrer'>Profile</a></p>
                                                    );
                                                })}
                                            </TabPanel>
                                        </div>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetailsPage;
