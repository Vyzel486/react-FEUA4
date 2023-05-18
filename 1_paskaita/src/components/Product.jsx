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
function Product(props) {
  return (
    <div style={divStyle}>
        <h2 style={h2Style}>{props.name}</h2>
        <h1 style={h1Style}>{props.category.toUpperCase()}</h1>
        <b><p>{props.price}€</p></b>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number
}

export default Product;