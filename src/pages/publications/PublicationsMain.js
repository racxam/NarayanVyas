import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import publicationsData from '../../data/publicationsData';
import { fetchScopusCitationImage } from '../../components/PublicationStatsCard/scopusApi';

// Function to parse date in MM/YYYY format
const parseDate = (dateString) => {
	const [month, year] = dateString.split('/').map(Number);
	return new Date(year, month - 1);
};

// Sort publications by date, latest first
const sortedPublications = [...publicationsData].sort((a, b) => parseDate(b.date) - parseDate(a.date));

// Function to highlight "N. Vyas" in the contributors' string using dangerouslySetInnerHTML
const highlightContributors = (contributors) => {
	return contributors.replace(/N\. Vyas/g, '<strong>N. Vyas</strong>');
};

// Delay function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const PublicationsMain = () => {
	const [publications, setPublications] = useState(sortedPublications);

	useEffect(() => {
		const updateCitationCounts = async () => {
			const updatedPublications = [];

			for (const pub of publications) {
				if (pub.doi) {
					try {
						console.log('Fetching data for publication:', pub.title);
						const citationImage = await fetchScopusCitationImage(pub.doi);
						console.log('Fetched data for publication:', pub.title, citationImage);
						updatedPublications.push({ ...pub, citationImage });
					} catch (error) {
						console.error('Failed to fetch citation image for:', pub.title, error);
						updatedPublications.push(pub);
					}
					await delay(1000); // delay of 1 second between each request
				} else {
					updatedPublications.push(pub);
				}
			}

			setPublications(updatedPublications);
		};

		updateCitationCounts();
	}, []);

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
									{(!pub.scopusIndexed && !pub.wosIndexed) && <span className='badge badge-success'>Peer-Reviewed</span>}
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
								{pub.citationImage && (
									<div>
										<img src={pub.citationImage} alt="Scopus Citation Count" />
									</div>
								)}
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
