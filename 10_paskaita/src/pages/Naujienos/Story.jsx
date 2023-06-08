import PropTypes from "prop-types";

const Story = ({ title, body }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

Story.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Story;
