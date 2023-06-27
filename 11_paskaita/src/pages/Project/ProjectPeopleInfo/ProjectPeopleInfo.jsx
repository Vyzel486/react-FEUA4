import PropTypes from "prop-types";
import "./ProjectPeopleInfo.scss";

const ProjectPeopleInfo = ({ people }) => {
  if (people.length === 0) {
    return <div>No info about people... :(</div>;
  }

  return (
    <div className="people">
      <p>
        <span>People: </span>
      </p>
      <div className="persons">
        {people.map((person, index) => (
          <div key={index} className="personCard">
            <p>
              <span>Name: </span> {person.name}
            </p>
            <p>
              <span>Surname: </span> {person.surname}
            </p>
            <p>
              <span>Position: </span>
              {person.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

ProjectPeopleInfo.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default ProjectPeopleInfo;
