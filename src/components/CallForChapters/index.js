import React from 'react';
import SectionTitle from '../../components/SectionTitle/index';
import CallForChaptersImageOnly from '../../components/CallForChapters/call_for_chapters_image_only';
import cfcData from '../../data/callForChaptersBooksData';
import Slider1 from '../../components/Slider/Slider';

const sortedCfcData = cfcData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

const CFCIndex = () => {
	return (
		<div className="product__area product__plr mt-100 mb-70">
			<div className="container-fluid">
				<div className="col-xl-12 col-lg-12 wow animate__fadeIn mt-100" data-wow-duration="1.1s">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<SectionTitle
								sectionClass="service__section-box text-center pb-35 section-title-fixed-width"
								subTitle="Call For Chapters"
								Title="Submit Your Quality Chapter"
							/>
						</div>
					</div>
				</div>


				<Slider1/>

				{/* <div className="row">
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
								Url={`call-for-chapters/${book.id}`}
							/>
						</div>
					))}
				</div> */}






			</div>
		</div>
	);
}

export default CFCIndex;
