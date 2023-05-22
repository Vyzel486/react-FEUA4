import PropTypes from 'prop-types'
import { useState } from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";

const h2Style = {
  color: 'grey',
  fontSize: '1rem',
}

const h1Style = {
    fontSize: '1.5rem'
}

const divStyle = {
  width: '350px',
  margin: '10px'
}

function Product({category, name, price}) {
  const [rate, setRate] = useState(0);

  return (
    <div style={divStyle}>
        <h2 style={h2Style}>{name}</h2>
        <h1 style={h1Style}>{category.toUpperCase()}</h1>
        <div>
        {rate >= 1 ? (
          <FaStar
            onClick={() =>
              setRate((previousRate) => (previousRate === 1 ? 0 : 1))
            }
          />
        ) : (
          <FaRegStar onClick={() => setRate(1)} />
        )}
        {rate >= 2 ? (
          <FaStar
            onClick={() =>
              setRate((previousRate) => (previousRate === 2 ? 0 : 2))
            }
          />
        ) : (
          <FaRegStar onClick={() => setRate(2)} />
        )}
        {rate >= 3 ? (
          <FaStar
            onClick={() =>
              setRate((previousRate) => (previousRate === 3 ? 0 : 3))
            }
          />
        ) : (
          <FaRegStar onClick={() => setRate(3)} />
        )}
        {rate >= 4 ? (
          <FaStar
            onClick={() =>
              setRate((previousRate) => (previousRate === 4 ? 0 : 4))
            }
          />
        ) : (
          <FaRegStar onClick={() => setRate(4)} />
        )}
        {rate >= 5 ? (
          <FaStar 
            onClick={() => 
              setRate((previousRate) => (previousRate === 5 ? 0 : 5))
            }
          />
        ) : (
          <FaRegStar onClick={() => setRate(5)} />
        )}
      </div>
        {/* {rate} - atvaizdavimas puslapyje*/}
        <div><b>{price}</b></div>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

export default Product;