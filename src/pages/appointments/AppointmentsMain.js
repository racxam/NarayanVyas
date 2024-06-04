import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { InlineWidget } from "react-calendly";

const AppointmentsMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle="Book Appointments"
			/>

			<div className="product__area product__plr mt-30">
				<div className="container-fluid">
					<InlineWidget url="https://calendly.com/narayanvyas/flutter-session" styles={{
						height: '860px'
					}} />
				</div>
			</div>
		</main>
	);
}

export default AppointmentsMain;