import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import bgImg from '../../assets/img/cta/cta-bg-2.png';
import publications from './publicationsData'; // Import the publications data
import './PublicationsMain.css'; // Import the CSS file

// Function to parse date in MM/YYYY format
const parseDate = (dateString) => {
	const [month, year] = dateString.split('/').map(Number);
	return new Date(year, month - 1);
};

// Sort publications by date, latest first
publications.sort((a, b) => parseDate(b.date) - parseDate(a.date));

// Function to bold "N. Vyas" in the authors' string
const highlightAuthors = (authors) => {
	return authors.replace(/N\. Vyas/g, '<strong>N. Vyas</strong>');
};

const PublicationsMain = () => {
	return (
		<main>
			<Breadcrumb pageTitle="Publications" />
			<div className='container'>
				{publications.map((pub, index) => (
					<div key={index} className='publication-entry mb-4 p-3 border rounded'>
						<div className='publication-number'>{index + 1}</div>
						<div className='publication-details'>
							<div className='d-flex justify-content-between align-items-center'>
								<a href={pub.link} target="_blank" rel="noopener noreferrer" className='publication-title'>
									{pub.title}
								</a>
								{pub.scopusIndexed && <span className='badge badge-success'>Scopus Indexed</span>}
							</div>
							<p className='publication-authors'><strong>Authors:</strong> <span dangerouslySetInnerHTML={{ __html: highlightAuthors(pub.authors) }} /></p>
							<p className='publication-type'><strong>Type:</strong> {pub.type}</p>
							<p className='publication-venue'><strong>Venue:</strong> {pub.venue}</p>
							<p className='publication-date'><strong>Date:</strong> {pub.date}</p>
							<p className='publication-doi'>
								<strong>DOI:</strong> <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.doiText}</a>
							</p>
						</div>
					</div>
				))}
			</div>
			<CTA ctaBG={bgImg} />
		</main>
	);
}

export default PublicationsMain;
