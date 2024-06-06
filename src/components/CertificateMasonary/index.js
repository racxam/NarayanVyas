import React from 'react';
import Masonry from 'react-masonry-css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import certificatesData from '../../data/certificatesData';
import SingleCertificate from '../SingleCertificate';

// Sort certificates by issueDate
certificatesData.sort((a, b) => new Date(a.issueDate) - new Date(b.issueDate));

const CertificateMasonary = () => {
    const breakpointColumnsObj = {
        default: 5,
        1200: 5,
        992: 3,
        576: 2,
    };

    const tabStyle = 'nav justify-content-center project-2__button-box masonary-menu';

    const renderCertificates = (type) => {
        return certificatesData
            .filter(cert => type === "all" || cert.type === type)
            .map(cert => (
                <div key={cert.id}>
                    <SingleCertificate
                        Image={cert.image}
                        Title={cert.title}
                        IssueDate={cert.issueDate}
                        CertificateId={cert.certificateId}
                        VerificationUrl={cert.verificationUrl}
                    />
                </div>
            ));
    };

    return (
        <div className="project-2__area project-2__plr-3 project-2__space p-relative fix wow animate__fadeInUp " data-wow-duration="1.1s" style={{ paddingTop: "10px" }}>
            <div className="container-fluid">
                <Tabs>
                    <div className="row">
                        <div className="col-xl-12">
                            <TabList className={tabStyle}>
                                <Tab><button>All</button></Tab>
                                <Tab><button>Awards</button></Tab>
                                <Tab><button>Memberships</button></Tab>
                                <Tab><button>Courses</button></Tab>
                            </TabList>
                        </div>
                    </div>
                    <TabPanel>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid "
                            columnClassName="my-masonry-grid_column">
                            {renderCertificates("all")}
                        </Masonry>
                    </TabPanel>
                    <TabPanel>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {renderCertificates("award")}
                        </Masonry>
                    </TabPanel>
                    <TabPanel>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {renderCertificates("membership")}
                        </Masonry>
                    </TabPanel>
                    <TabPanel>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {renderCertificates("course")}
                        </Masonry>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default CertificateMasonary;