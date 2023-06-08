import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ name, email, city, zipcode }) => {
  return (
    <div className="userCard">
      <h2>{name}</h2>
      <p>
        <span>Email: </span>
        {email}
      </p>
      <p>
        <span>City: </span>
        {city}
      </p>
      <p>
        <span>Zip: </span>
        {zipcode}
      </p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
};

export default Card;
