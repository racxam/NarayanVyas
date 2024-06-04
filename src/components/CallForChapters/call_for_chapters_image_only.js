import { Link } from 'react-router-dom';
import productImg from '../../assets/img/product/product-3.jpg';

const CallForChaptersImageOnly = (props) => {
    const { itemClass, Image, Title, Price, Publisher, Url, btnText } = props;
    return (
        <div className={itemClass ? itemClass : 'product__item text-center'}>
            <div className="product__img-container">
                <Link to={Url ? Url : ''}>
                    <img src={Image ? Image : productImg} alt={Title ? Title : 'Book Image'} className="product__img" />
                </Link>
            </div>
        </div>
    )
}   

export default CallForChaptersImageOnly;
