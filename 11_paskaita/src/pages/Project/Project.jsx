import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getProject } from "../../api/projects";
import ProjectGeneralInfo from "./ProjectGeneralInfo/ProjectGeneralInfo.jsx";
import ProjectActions from "./ProjectAction/ProjectActions";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProject(id)
      .then((response) => {
        setProject(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <ProjectActions id={project.id} />
      <ProjectGeneralInfo project={project} />
    </div>
  );
};

export default Project;
