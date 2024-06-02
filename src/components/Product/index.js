import { Link } from 'react-router-dom';

import productImg from '../../assets/img/product/product-3.jpg'

const SingleProduct = (props) => {
    const { itemClass, Image, Title, Price, Publisher, Url, btnText } = props;
    return (
        <div className={itemClass ? itemClass : 'product__item text-center'}>
            <div className="product__img">
                <img src={Image ? Image : productImg} alt="" />  
                
                {/* It was for the name of the publisher  */}
                {/* <div className="product__img-text">
                    <span>{Publisher ? Publisher : ''}</span>
                </div> */}


                {/* <div className="product__icon">
                    <Link to={Url ? Url : ''}><i className="fal fa-shopping-basket"></i></Link>
                    <Link to={Url ? Url : ''}><i className="fal fa-heart"></i></Link>
                </div> */}
            </div>
            <div className="product__content">
                <div className="product__content-text">
                    <h6><Link to={Url ? Url : ''}>{Title ? Title : 'Creative for mukap'}</Link></h6>
                    <span>{Price ? Price : '$555'}</span>
                </div>
                <div className="product__button">
                    <a className="yellow-btn-sm" href={Url ? Url : ''}>{btnText ? btnText : 'View Details'}</a>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct