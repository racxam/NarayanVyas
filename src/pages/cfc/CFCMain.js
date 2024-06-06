import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import callForChaptersData from '../../data/callForChaptersBooksData'; // Import the CFC data array
import CallForChaptersImageOnly from '../../components/CallForChapters/call_for_chapters_image_only';

const CFCMain = () => {
	// Sort CFCs by projected release date, latest first
	const sortedCfcData = callForChaptersData.sort((a, b) => new Date(b.projectedReleaseDate) - new Date(a.projectedReleaseDate));

	return (
		<main>
			<Breadcrumb pageTitle="Call For Chapters" />
			<div className="product__area product__plr mt-100 mb-70">
				<div className="container-fluid">
					<div className="row">
						{sortedCfcData.map((book) => (
							<div
								key={book.id}
								className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp"
								data-wow-duration="1.1s"
							>
								<CallForChaptersImageOnly
									Image={book.title.image}
									Title={book.title.text}
									Publisher={book.publisher}
									Price={book.price}
									Url={book.id}
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
