import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';
import blogImg1 from '../../assets/img/blog/blog-details-2.jpg';
import blogImg2 from '../../assets/img/blog/blog-details-3.jpg';
import blogImg3 from '../../assets/img/blog/blog-details-4.jpg';

import postImg1 from '../../assets/img/blog/blog-details-5.jpg';
import postImg2 from '../../assets/img/blog/blog-details-6.jpg';
import postImg3 from '../../assets/img/blog/blog-details-7.jpg';

const BlogMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

	return (
		<main>

			<Breadcrumb
				pageTitle= "Blog Grid Page"
			/>
			
			<div className="postbox__area pb-100 pt-100">
      	<ModalVideo channel='youtube' isOpen={isOpen} videoId='PO_fBTkoznc' onClose={() => { openModal(); }} />
				<div className="container">
					<div className="row">
						<div className="col-xxl-8 col-xl-8 col-lg-8">
							<div id="blog" className="postbox__wrapper pr-20">
								<article className="postbox__item format-image mb-50 transition-3">
									<div className="postbox__thumb w-img wow animate__fadeInUp" data-wow-duration="1.1s">
										<Link to="/blog-details">
											<img src={blogImg1} alt="" />
										</Link>
									</div>
									<div className="postbox__content wow animate__fadeInUp" data-wow-duration="1.1s">
										<div className="postbox__meta">
											<span><Link to="#">Mris Jonsong</Link></span>
											<span><Link to="#">Nov 4, 2022</Link></span>
										</div>
										<h3 className="postbox__title">
										<Link to="/blog-details">Service Construct deals physical damage with his basic attack in the match.</Link>
										</h3>
										<div className="postbox__text">
											<p>There are many variations of passages agency we have covered many special events such as 
											fireworks, fairs, parades, races, walks, a Lorem Ipsum Fasts injecte.</p>
										</div>
									</div>
								</article>
								<article className="postbox__item format-video mb-50 transition-3">
									<div className="postbox__thumb postbox__video w-img p-relative wow animate__fadeInUp" data-wow-duration="1.1s">
										<Link to="/blog-details">
											<img src={blogImg2} alt="" />
										</Link>
										<Link to="#" className="play-btn pulse-btn popup-video" onClick={() => { openModal(); }}><i className="fas fa-play"></i></Link>
									</div>
									<div className="postbox__content wow animate__fadeInUp" data-wow-duration="1.1s">
										<div className="postbox__meta">
											<span><Link to="#">Mris Jonsong</Link></span>
											<span><Link to="#">Nov 4, 2022</Link></span>
										</div>
										<h3 className="postbox__title">
											<Link to="/blog-details">Pure damage for a duration. This ability is the only interruptable by stuns</Link>
										</h3>
										<div className="postbox__text">
											<p>There are many variations of passages agency we have covered many special events such as 
											fireworks, fairs, parades, races, walks, a Lorem Ipsum Fasts injecte.</p>
										</div>
									</div>
								</article>
								<article className="postbox__item format-image mb-50 transition-3 fix">
									<div className="postbox__thumb w-img wow animate__fadeInUp" data-wow-duration="1.1s">
										<Link to="/blog-details">
											<img src={blogImg3} alt="" />
										</Link>
									</div>
									<div className="postbox__content wow animate__fadeInUp" data-wow-duration="1.1s">
										<div className="postbox__meta">
											<span><Link to="#">Resources</Link></span>
											<span><Link to="#">April 12, 2023</Link></span>
										</div>  
										<h3 className="postbox__title">
											<Link to="/blog-details">Then they need to establish a company branch office/partnership with anyone.</Link>
										</h3>
										<div className="postbox__text">
											<p>There are many variations of passages agency we have covered many special events such as 
											fireworks, fairs, parades, races, walks, a Lorem Ipsum Fasts injecte.</p>
										</div>
									</div>
								</article>
								<div className="basic-pagination wow animate__fadeInUp" data-wow-duration="1.1s">
									<nav>
										<ul>
											<li>
												<Link to="/blog">
													<i className="far fa-angle-left"></i>
												</Link>
											</li>
											<li>
												<Link className="current" href="/blog">1</Link>
											</li>
											<li>
												<Link to="/blog">2</Link>
											</li>
											<li>
												<Link to="/blog">...</Link>
											</li>
											<li>
												<Link to="/blog">3</Link>
											</li>
											<li>
												<Link to="/blog">
													<i className="far fa-angle-right"></i>
												</Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						<div className="col-xxl-4 col-xl-4 col-lg-4">
							<div className="sidebar__wrapper">
								<div className="sidebar__widget mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
									<div className="sidebar__widge-title-box">
										<h3 className="sidebar__widget-title">Search</h3>
									</div>
									<div className="sidebar__widget-content">
										<div className="sidebar__search">
											<form action="#">
												<div className="sidebar__search-input-2">
													<input type="text" placeholder="Search your keyword..." />
													<button type="submit">
														<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M8.01371 15.2219C11.9525 15.2219 15.1456 12.0382 15.1456 8.11096C15.1456 4.18368 11.9525 1 8.01371 1C4.07488 1 0.881836 4.18368 0.881836 8.11096C0.881836 12.0382 4.07488 15.2219 8.01371 15.2219Z" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														<path d="M16.9287 16.9996L13.0508 13.1331" stroke="#5F6168" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
														</svg>
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div className="sidebar__widget mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
									<div className="sidebar__widge-title-box">
										<h3 className="sidebar__widget-title">Recent Post</h3>
									</div>
									<div className="sidebar__widget-content">
										<div className="sidebar__post rc__post">
											<div className="rc__post mb-20 d-flex">
												<div className="rc__post-thumb mr-20">
													<Link to="/blog-details">
														<img src={postImg1} alt="" />
													</Link>
												</div>
												<div className="rc__post-content">
													<h3 className="rc__post-title">
														<Link to="/blog-details">We play chimney pot
														Chip bonne.</Link>
													</h3>
													<div className="rc__meta">
														<span>4 March. 2022</span>
													</div>
												</div>
											</div>
											<div className="rc__post mb-20 d-flex">
												<div className="rc__post-thumb mr-20">
													<Link to="/blog-details">
														<img src={postImg2} alt="" />
													</Link>
												</div>
												<div className="rc__post-content">
													<h3 className="rc__post-title">
														<Link to="/blog-details">We play chimney pot
														Chip bonne.</Link>
													</h3>
													<div className="rc__meta">
														<span>4 March. 2022</span>
													</div>
												</div>
											</div>
											<div className="rc__post d-flex">
												<div className="rc__post-thumb mr-20">
													<Link to="/blog-details">
														<img src={postImg3} alt="" />
													</Link>
												</div>
												<div className="rc__post-content">
													<h3 className="rc__post-title">
														<Link to="/blog-details">We play chimney pot
														Chip bonne.</Link>
													</h3>
													<div className="rc__meta">
														<span>4 March. 2022</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="sidebar__widget mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
									<div className="sidebar__widge-title-box">
										<h3 className="sidebar__widget-title">Categories</h3>
									</div>
									<div className="sidebar__widget-content">
										<ul>
											<li><Link to="/blog"><span><i className="fal fa-angle-right"></i>Technology</span><span>01</span></Link></li>
											<li><Link to="/blog"><span><i className="fal fa-angle-right"></i>Software</span><span>02</span></Link></li>
											<li><Link to="/blog"><span><i className="fal fa-angle-right"></i>Development</span><span>03</span></Link></li>
											<li><Link to="/blog"><span><i className="fal fa-angle-right"></i>Tips & Tricks</span><span>04</span></Link></li>
											<li><Link to="/blog"><span><i className="fal fa-angle-right"></i>News</span><span>05</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="sidebar__widget mb-40 wow animate__fadeInUp" data-wow-duration="1.1s">
									<div className="sidebar__widge-title-box">
										<h3 className="sidebar__widget-title">Tag Cloud</h3>
									</div>
									<div className="sidebar__widget-content">
										<div className="tagcloud">
										<Link to="#">Envato</Link>
										<Link to="#">Development</Link>
										<Link to="#">Technology</Link>
										<Link to="#">Wordpress</Link>
										<Link to="#">PHP</Link>
										<Link to="#">Branding</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<CTA
				ctaBG={bgImg}
			/>

		</main>
	);
}

export default BlogMain;