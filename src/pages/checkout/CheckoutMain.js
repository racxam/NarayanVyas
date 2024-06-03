import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';

import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';


const PaymentFaq = () => {
	return (
		<>
			<Accordion className="accordion" preExpanded={'a'}>
        <AccordionItem className="accordion-item" uuid="a">
          <AccordionItemHeading>
            <AccordionItemButton className="accordion-button">
						Direct Bank Transfer
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion-body">
            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="accordion-item" uuid="b">
          <AccordionItemHeading>
            <AccordionItemButton className="accordion-button">
							Cheque Payment
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion-body">
            <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="accordion-item" uuid="c">
          <AccordionItemHeading>
            <AccordionItemButton className="accordion-button">
							PayPal
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion-body">
            <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
		</>
	);
}

const HomeMain = () => {
	const [loginOpen, setLoginOpen] = useState(false)
	const [cuponOpen, setCuponOpen] = useState(false)


	return (
		<main>
			<Breadcrumb
				pageTitle= "Checkout"
			/>
			
			<section className="coupon-area pt-100 pb-30">
				<div className="container">
					<div className="row">
						<div className="col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<div className="coupon-accordion">
								<h3>Returning customer? <span id="showlogin" onClick={() => {setLoginOpen(!loginOpen)}}>Click here to login</span></h3>
								{loginOpen ?
								<div id="checkout-login" className="coupon-content">
									<div className="coupon-info">
										<p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est
											sit amet ipsum luctus.</p>
										<form action="#">
											<p className="form-row-first">
												<label>Username or email <span className="required">*</span></label>
												<input type="text" />
											</p>
											<p className="form-row-last">
												<label>Password <span className="required">*</span></label>
												<input type="text" />
											</p>
											<p className="form-row">
												<button className="it-btn" type="submit">Login</button>
												<label>
													<input type="checkbox" />
													Remember me
												</label>
											</p>
											<p className="lost-password">
												<a href="#">Lost your password?</a>
											</p>
										</form>
									</div>
								</div> : ''}
							</div>
						</div>
						<div className="col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
							<div className="coupon-accordion">
								<h3>Have a coupon? <span id="showcoupon" onClick={() => {setCuponOpen(!cuponOpen)}}>Click here to enter your code</span></h3>
								{cuponOpen ? 
								<div id="checkout_coupon" className="coupon-checkout-content">
									<div className="coupon-info">
										<form action="#">
											<p className="checkout-coupon">
												<input type="text" placeholder="Coupon Code" />
												<button className="it-btn" type="submit">Apply Coupon</button>
											</p>
										</form>
									</div>
								</div>: ''}
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<section className="checkout-area pb-70">
				<div className="container">
					<form action="#">
						<div className="row">
							<div className="col-lg-6">
								<div className="checkbox-form">
									<h3>Billing Details</h3>
									<div className="row">
											<div className="col-md-12">
												<div className="country-select">
												<label>Country <span className="required">*</span></label>
												<select>
														<option value="volvo">bangladesh</option>
														<option value="saab">Algeria</option>
														<option value="mercedes">Afghanistan</option>
														<option value="audi">Ghana</option>
														<option value="audi2">Albania</option>
														<option value="audi3">Bahrain</option>
														<option value="audi4">Colombia</option>
														<option value="audi5">Dominican Republic</option>
												</select>
												</div>
											</div>
											<div className="col-md-6">
												<div className="checkout-form-list">
												<label>First Name <span className="required">*</span></label>
												<input type="text" placeholder="" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="checkout-form-list">
												<label>Last Name <span className="required">*</span></label>
												<input type="text" placeholder="" />
												</div>
											</div>
											<div className="col-md-12">
												<div className="checkout-form-list">
												<label>Company Name</label>
												<input type="text" placeholder="" />
												</div>
											</div>
											<div className="col-md-12">
												<div className="checkout-form-list">
												<label>Address <span className="required">*</span></label>
												<input type="text" placeholder="Street address" />
												</div>
											</div>
											<div className="col-md-12">
												<div className="checkout-form-list">
												<input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
												</div>
											</div>
											<div className="col-md-12">
												<div className="checkout-form-list">
												<label>Town / City <span className="required">*</span></label>
												<input type="text" placeholder="Town / City /" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="checkout-form-list">
												<label>State / County <span className="required">*</span></label>
												<input type="text" placeholder="" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="checkout-form-list">
												<label>Postcode / Zip <span className="required">*</span></label>
												<input type="text" placeholder="Postcode / Zip" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="checkout-form-list">
												<label>Email Address <span className="required">*</span></label>
												<input type="email" placeholder="" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="checkout-form-list">
												<label>Phone <span className="required">*</span></label>
												<input type="text" placeholder="Postcode / Zip" />
												</div>
											</div>
											<div className="col-md-12">
												<div className="checkout-form-list create-acc">
												<input id="cbox" type="checkbox" />
												<label>Create an account?</label>
												</div>
												<div id="cbox_info" className="checkout-form-list create-account">
												<p>Create an account by entering the information below. If you are a returning
														customer please login at the top of the page.</p>
												<label>Account password <span className="required">*</span></label>
												<input type="password" placeholder="password" />
												</div>
											</div>
									</div>
									<div className="different-address">
											<div className="ship-different-title">
												<h3>
												<label>Ship to a different address?</label>
												<input id="ship-box" type="checkbox" />
												</h3>
											</div>
											<div id="ship-box-info">
												<div className="row">
												<div className="col-md-12">
														<div className="country-select">
															<label>Country <span className="required">*</span></label>
															<select>
															<option value="volvo">bangladesh</option>
															<option value="saab">Algeria</option>
															<option value="mercedes">Afghanistan</option>
															<option value="audi">Ghana</option>
															<option value="audi2">Albania</option>
															<option value="audi3">Bahrain</option>
															<option value="audi4">Colombia</option>
															<option value="audi5">Dominican Republic</option>
															</select>
														</div>
												</div>
												<div className="col-md-6">
														<div className="checkout-form-list">
															<label>First Name <span className="required">*</span></label>
															<input type="text" placeholder="" />
														</div>
												</div>
												<div className="col-md-6">
														<div className="checkout-form-list">
															<label>Last Name <span className="required">*</span></label>
															<input type="text" placeholder="" />
														</div>
												</div>
												<div className="col-md-12">
														<div className="checkout-form-list">
															<label>Company Name</label>
															<input type="text" placeholder="" />
														</div>
												</div>
												<div className="col-md-12">
														<div className="checkout-form-list">
															<label>Address <span className="required">*</span></label>
															<input type="text" placeholder="Street address" />
														</div>
												</div>
												<div className="col-md-12">
														<div className="checkout-form-list">
															<input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
														</div>
												</div>
												<div className="col-md-12">
														<div className="checkout-form-list">
															<label>Town / City <span className="required">*</span></label>
															<input type="text" placeholder="Town / City" />
														</div>
												</div>
												<div className="col-md-6">
														<div className="checkout-form-list">
															<label>State / County <span className="required">*</span></label>
															<input type="text" placeholder="" />
														</div>
												</div>
												<div className="col-md-6">
														<div className="checkout-form-list">
															<label>Postcode / Zip <span className="required">*</span></label>
															<input type="text" placeholder="Postcode / Zip" />
														</div>
												</div>
												<div className="col-md-6">
														<div className="checkout-form-list">
															<label>Email Address <span className="required">*</span></label>
															<input type="email" placeholder="" />
														</div>
												</div>
												<div className="col-md-6">
														<div className="checkout-form-list">
															<label>Phone <span className="required">*</span></label>
															<input type="text" placeholder="Postcode / Zip" />
														</div>
												</div>
												</div>
											</div>
											<div className="order-notes">
												<div className="checkout-form-list">
												<label>Order Notes</label>
												<textarea id="checkout-mess" cols="30" rows="10"
														placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
												</div>
											</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="your-order mb-30 ">
									<h3>Your order</h3>
									<div className="your-order-table table-responsive">
										<table>
											<thead>
											<tr>
													<th className="product-name">Product</th>
													<th className="product-total">Total</th>
											</tr>
											</thead>
											<tbody>
											<tr className="cart_item">
													<td className="product-name">
														Vestibulum suscipit <strong className="product-quantity"> × 1</strong>
													</td>
													<td className="product-total">
														<span className="amount">$165.00</span>
													</td>
											</tr>
											<tr className="cart_item">
													<td className="product-name">
														Vestibulum dictum magna <strong className="product-quantity"> × 1</strong>
													</td>
													<td className="product-total">
														<span className="amount">$50.00</span>
													</td>
											</tr>
											</tbody>
											<tfoot>
											<tr className="cart-subtotal">
													<th>Cart Subtotal</th>
													<td><span className="amount">$215.00</span></td>
											</tr>
											<tr className="shipping">
													<th>Shipping</th>
													<td>
														<ul>
														<li>
															<input type="radio" name="shipping" />
															<label>
																Flat Rate: <span className="amount">$7.00</span>
															</label>
														</li>
														<li>
															<input type="radio" name="shipping" />
															<label>Free Shipping:</label>
														</li>
														</ul>
													</td>
											</tr>
											<tr className="order-total">
													<th>Order Total</th>
													<td><strong><span className="amount">$215.00</span></strong>
													</td>
											</tr>
											</tfoot>
										</table>
									</div>

									<div className="payment-method">
										<PaymentFaq />
										<div className="order-button-payment mt-20">
											<button type="submit" className="it-btn">Place order</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
			
			<CTA
				btnText={"Book Appointment"}
			/>

		</main>
	);
}

export default HomeMain;