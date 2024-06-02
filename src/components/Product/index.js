import { Link } from 'react-router-dom';
import productImg from '../../assets/img/product/product-3.jpg';

const SingleProduct = (props) => {
    const { itemClass, Image, Title, Price, Publisher, Url, btnText } = props;
    return (

        

        <div className={itemClass ? itemClass : 'product__item text-center'}>  
            <div className="product__img-container">
                <Link to={Url ? Url : ''}>
                    <img src={Image ? Image : productImg} alt={Title ? Title : 'Book Image'} className="product__img" />
                </Link>
                {/* {Publisher && <div className="product__img-text"><span>{Publisher}</span></div>} */}

            </div>
            <div className="product__content d-flex row justify-content-center col align-items-end">
                <div className="product__content-text">
                    <p className="product__title"><Link to={Url ? Url : ''}>{Title ? Title : 'Creative for mukap'}</Link></p>
                    <div className="product__price" style={{fontWeight:"bold"}} >{Price ? Price : '$555'}</div>
                </div>
                <div className="contact__button wow animate__fadeInUp" data-wow-duration="1.1s" style={{marginBottom:"1px" ,border:"1px solid black"}} >
                    <a className="main-btn-sm  tp-btn-hover alt-color" href={Url ? Url : ''}><span>View Details</span><b></b></a>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
