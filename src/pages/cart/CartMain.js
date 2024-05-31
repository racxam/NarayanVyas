import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';
import { Link } from 'react-router-dom';

const CartMain = () => {
	return (
		<main>
			
			<Breadcrumb
				pageTitle= "Cart"
			/>
			
			<section className="cart-area pt-100 pb-100">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<form action="#">
								<div className="table-content table-responsive wow animate__fadeInUp" data-wow-duration="1.1s">
									<table className="table">
										<thead>
											<tr>
												<th className="product-thumbnail">Images</th>
												<th className="cart-product-name">Product</th>
												<th className="product-price">Unit Price</th>
												<th className="product-quantity">Quantity</th>
												<th className="product-subtotal">Total</th>
												<th className="product-remove">Remove</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="product-thumbnail"><Link to="/product-details"><img src="assets/img/product/product-1.jpg" alt="" /></Link></td>
												<td className="product-name"><Link to="/product-details">specialone 4 Inch 820W</Link></td>
												<td className="product-price"><span className="amount">$180.00</span></td>
												<td className="product-quantity">
													<span className="cart-minus">-</span>
													<input className="cart-input" type="text" value="1" />
													<span className="cart-plus">+</span>
												</td>
												<td className="product-subtotal"><span className="amount">$760.00</span></td>
												<td className="product-remove"><Link to="#"><i className="fa fa-times"></i></Link></td>
											</tr>
											<tr>
												<td className="product-thumbnail"><Link to="/product-details"><img src="assets/img/product/product-3.jpg" alt="" /></Link></td>
												<td className="product-name"><Link to="/product-details">Heavytwo 20V Max Cordless</Link></td>
												<td className="product-price"><span className="amount">$1260.50</span></td>
												<td className="product-quantity">
													<span className="cart-minus">-</span>
													<input className="cart-input" type="text" value="1" />
													<span className="cart-plus">+</span>
												</td>
												<td className="product-subtotal"><span className="amount">$90.50</span></td>
												<td className="product-remove"><Link to="#"><i className="fa fa-times"></i></Link></td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className="row">
									<div className="col-12 wow animate__fadeInUp" data-wow-duration="1.1s">
										<div className="coupon-all">
											<div className="coupon">
												<input id="coupon_code" className="input-text" name="coupon_code" value=""
													placeholder="Coupon code" type="text" />
												<button className="it-btn tp-btn-hover alt-color" name="apply_coupon" type="submit">
												<span>Apply coupon</span>
												<b></b>
												</button>
											</div>
											<div className="coupon2">
												<button className="it-btn tp-btn-hover alt-color" name="update_cart" type="submit">
												<span>Update cart</span>
												<b></b>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="row justify-content-end">
									<div className="col-md-5 wow animate__fadeInUp" data-wow-duration="1.1s">
										<div className="cart-page-total">
											<h2>Cart totals</h2>
											<ul className="mb-20">
												<li>Subtotal <span>$250.00</span></li>
												<li>Total <span>$250.00</span></li>
											</ul>
											<Link className="it-btn tp-btn-hover alt-color" to="/checkout">
												<span>Proceed to checkout</span>
												<b></b>
											</Link>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			
			<CTA
				ctaBG={bgImg}
			/>

		</main>
	);
}

export default CartMain;