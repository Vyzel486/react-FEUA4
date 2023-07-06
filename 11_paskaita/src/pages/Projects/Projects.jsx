import { useEffect, useState } from "react";
import { Link, generatePath } from "react-router-dom";
import { getProjects } from "../../api/projects";
import ProjectCard from "./ProjectCard";
import { PROJECT_ROUTE, NEW_PROJECT_ROUTE } from "../../routes/const";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProjects()
      .then((response) => {
        setProjects(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="projects">
      <div className="new-project-button">
        <Link to={NEW_PROJECT_ROUTE}>
          <Button>Create New Project</Button>
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : projects.length === 0 ? (
        <div>There are no projects yet.</div>
      ) : (
        <>
          <div className="all-projects">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={generatePath(PROJECT_ROUTE, { id: project.id })}
              >
                <ProjectCard
                  title={project.title}
                  imageUrl={project.imageUrl}
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
