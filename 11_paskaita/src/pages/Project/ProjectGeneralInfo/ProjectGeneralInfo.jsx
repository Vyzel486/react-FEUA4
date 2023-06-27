import PropTypes from "prop-types";
import ProjectPeopleInfo from "../ProjectPeopleInfo/ProjectPeopleInfo";
import "./ProjectGeneralInfo.scss";

const ProjectGeneralInfo = ({ project }) => {
  const {
    title,
    description,
    imageUrl,
    client,
    startingDate,
    endingDate,
    people,
  } = project;

  return (
    <div className="projectGeneralInfo-container">
      <h1>{title}</h1>
      <hr />

      <div className="projectGeneralInfo-card">
        <div>
          <img src={imageUrl} alt={title} />
        </div>

        <div className="projectGeneralInfo-description">
          <div>
            <span>Starting date: </span>
            {startingDate}
          </div>

          <div>
            <span>Ending date: </span>
            {endingDate}
          </div>

          <p>{description}</p>

          <div>
            <span>Client: </span>
            {client}
          </div>

          <ProjectPeopleInfo people={people} />
        </div>
      </div>
    </div>
  );
};

ProjectGeneralInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  startingDate: PropTypes.string.isRequired,
  endingDate: PropTypes.string.isRequired,
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectGeneralInfo;
