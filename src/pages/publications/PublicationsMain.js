import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import publications from '../../data/publicationsData';

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
							<div className='title-and-badges'>
								<div className='publication-title'>
									<a href={pub.link} target="_blank" rel="noopener noreferrer">
										{pub.title}
									</a>
								</div>
								<div className='badges ml-20'>
									{pub.wosIndexed && <span className='badge badge-sci'>SCI</span>}
									{pub.scopusIndexed && <span className='badge badge-success'>Scopus</span>}
								</div>
							</div>
							<p className='publication-contributors'>
								<div>

								<i className="fas fa-user" style={{ color: '#c0392b' }}></i>
								<strong>{pub.type === 'Book' ? 'Editors' : 'Authors'}:</strong>
								<span dangerouslySetInnerHTML={{ __html: highlightContributors(pub.contributors) }} />
								</div>
							</p>
							<p className='publication-info'>
								<div>

								<i className="far fa-calendar-alt" style={{ color: '#f39c12' }}></i> {pub.date}
								<span className="separator">|</span>
								</div>

								
								<div>

								<i className="fas fa-book" style={{ color: '#27ae60' }}></i> {pub.type}
								<span className="separator">|</span>
								</div>

								<div>

								<i className="far fa-building" style={{ color: '#2980b9' }}></i> {pub.publisher}
								<span className="separator">|</span>

								</div>

								<div>
									<strong>DOI :</strong><a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.doiText}</a>
								</div>
							</p>
						</div>
					</div>
				))}
			</div>
			<CTA />
		</main>
	);
}

export default PublicationsMain;
