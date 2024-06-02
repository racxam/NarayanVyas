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

// Function to highlight "N. Vyas" in the contributors' string using dangerouslySetInnerHTML
const highlightContributors = (contributors) => {
	return contributors.replace(/N\. Vyas/g, '<strong>N. Vyas</strong>');
};

const PublicationsMain = () => {
	return (
		<main>
			<Breadcrumb pageTitle="Publications" />
			<div className='container mt-100 mb-100'>
				{publications.map((pub, index) => (
					<div key={index} className='publication-entry'>
						<div className='publication-number-box'>
							<div className='publication-number'>{index + 1}</div>
						</div>
						<div className='publication-details'>
							<div className='d-flex justify-content-between align-items-center'>
								<a href={pub.link} target="_blank" rel="noopener noreferrer" className='publication-title'>
									{pub.title}
								</a>
								{pub.scopusIndexed && <span className='badge badge-success'>Scopus Indexed</span>}
							</div>
							<p className='publication-contributors'>
								<i className="fas fa-user" style={{ color: '#c0392b' }}></i> <strong>{pub.type === 'Book' ? 'Editors' : 'Authors'}:</strong> <span dangerouslySetInnerHTML={{ __html: highlightContributors(pub.contributors) }} />
							</p>
							<p className='publication-info'>
								<i className="far fa-calendar-alt" style={{ color: '#f39c12' }}></i> {pub.date}
								<span className="separator">|</span>
								<i className="fas fa-book" style={{ color: '#27ae60' }}></i> {pub.type}
								<span className="separator">|</span>
								<i className="far fa-building" style={{ color: '#2980b9' }}></i> {pub.publisher}
								<span className="separator">|</span>
								<strong>DOI:</strong><a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.doiText}</a>
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
