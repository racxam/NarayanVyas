import React from 'react';
import servicesData from '../../data/servicesData';
import SingleService from '../../components/Service';

const ServiceMain = () => {
	return (
		<div className="service__area service__space service__mlr pt-100 pb-70 p-relative mt-1">
			<div className="container-fluid">
				<div className="row">
					{servicesData.map((service, index) => {
						const colorIndex = (index % 6) + 1; // Ensures the color index loops between 1 and 6
						return (
							<div key={service.id} className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
								<SingleService
									itemClass="service__item service__item-bg p-relative fix shape-none"
									descClass="text-white"
									btnClass={`service__link service__link-color-${colorIndex}`}
									titleClass={`service__title color-${colorIndex}`}
									serviceIconBg={service.iconBg}
									Title={service.pageTitle}
									Description={service.shortDescription}
									btnText="Read More"
									btnURL={`services/${service.id}`}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ServiceMain;