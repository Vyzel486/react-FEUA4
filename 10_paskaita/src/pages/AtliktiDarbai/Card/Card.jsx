import PropTypes from "prop-types";
import "./Card.css"

const Card = ({ title, url,  description }) => {
  return (
    <div className="photoscard">
      <h2>{title}</h2>
      <img src={url} alt={title} />
      <p>{description}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
