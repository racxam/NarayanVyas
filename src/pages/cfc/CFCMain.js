import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';
import callForChaptersData from '../../data/callForChaptersBooksData'; // Import the CFC data array

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const CFCMain = () => {
	// Sort CFCs by projected release date, latest first
	const sortedCFCs = callForChaptersData.sort((a, b) => new Date(b.projectedReleaseDate) - new Date(a.projectedReleaseDate));

	return (
		<main>
			<Breadcrumb pageTitle="Call For Chapters" />
			<div className="product__area product__plr mt-100 mb-70">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-12">
							<div className="product__title-sm wow animate__fadeInUp" data-wow-duration="1.1s">
								<h4>Showing All Calls For Chapters</h4>
							</div>
						</div>
					</div>
					<div className="row">
						{sortedCFCs.map((cfc) => (
							<div
								key={cfc.id}
								className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp"
								data-wow-duration="1.1s"
							>
								<SingleProduct
									Image={cfc.title.image}
									Title={cfc.title.text}
									Publisher={cfc.publisher}
									Url={`/cfc/${cfc.permalink}`}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<CTA ctaBG={bgImg} />
		</main>
	);
}

export default CFCMain;
