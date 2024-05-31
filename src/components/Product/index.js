import { Link } from 'react-router-dom';

import productImg from '../../assets/img/product/product-3.jpg'

const SingleProduct = (props) => {
    const { itemClass, Image, Title, Price, Categories, btnText } = props;
	return(
        <div className={itemClass ? itemClass : 'product__item text-center'}>
            <div className="product__img">
                <img src={Image ? Image : productImg} alt="" />
                <div className="product__img-text">
                    <span>Sale!</span>
                </div>
                <div className="product__icon">
                    <Link to="/product-details"><i className="fal fa-shopping-basket"></i></Link>
                    <Link to="/product-details"><i className="fal fa-heart"></i></Link>
                </div>
            </div>
            <div className="product__content">
                <div className="product__content-text">
                    <span>{Categories ? Categories : 'Pride,Prejudice'}</span>
                    <h4><Link to="/product-details">{Title ? Title : 'Creative for mukap'}</Link></h4>
                    <span>{Price ? Price : '$555'}</span>
                </div>
                <div className="product__button">
                    <a className="yellow-btn-sm" href="#">{btnText ? btnText : 'Add To Card'}</a>
                </div>
            </div>
        </div>
	)
}

export default SingleProduct