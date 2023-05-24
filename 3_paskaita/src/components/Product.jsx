import PropTypes from 'prop-types';
import Button from './Button';
import "../App.css";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";

const Product = ({ image, title, price, description, availability, category }) => {
  
  return (
    <div className="product">
      <div className='image'>
        <FaSearch className='search'/>
        <img src={image} alt="mk2_calendar" />
      </div>
      <div className='productCard'>
        <div className='title'>
          <p>{title}</p> 
          <div className='icons'>
            <div className='icon'>
              <FaChevronLeft />
            </div>
            <div className='icon'>
              <FaChevronRight />
            </div>
          </div>
        </div>
        <p className='price'>{price}</p>
        <div className='description'>{description}</div>
        <p className='availability'><b>Availability:</b> <span>{availability}</span></p>
        <Button />
        <p className='category'>Category: {category}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  availability: PropTypes.string,
  category: PropTypes.string,
};

export default Product;
