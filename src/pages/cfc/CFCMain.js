import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import callForChaptersData from '../../data/callForChaptersBooksData'; // Import the CFC data array
import SingleProductWithImageOnly from '../../components/Product/single_product_with_image_only';
import bgImg from '../../assets/img/cta/cta-bg-2.png';

const CFCMain = () => {
	// Sort CFCs by projected release date, latest first
	const sortedCfcData = callForChaptersData.sort((a, b) => new Date(b.projectedReleaseDate) - new Date(a.projectedReleaseDate));

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
						{sortedCfcData.map((book) => (
							<div
								key={book.id}
								className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp"
								data-wow-duration="1.1s"
							>
								<SingleProductWithImageOnly
									Image={book.title.image}
									Title={book.title.text}
									Publisher={book.publisher}
									Price={book.price}
									Url={book.permalink}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<CTA
				btnText={"Book Appointment"}
			/>
		</main>
	);
}

export default CFCMain;
