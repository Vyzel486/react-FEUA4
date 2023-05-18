import PropTypes from 'prop-types'

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
  return (
    <div style={divStyle}>
        <h2 style={h2Style}>{name}</h2>
        <h1 style={h1Style}>{category.toUpperCase()}</h1>
        <b><p>{price}</p></b>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}

export default Product;