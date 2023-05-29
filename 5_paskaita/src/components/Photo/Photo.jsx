import PropTypes from "prop-types";
import "./Photo.css";

const Photo = ({ url, title }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Photo;