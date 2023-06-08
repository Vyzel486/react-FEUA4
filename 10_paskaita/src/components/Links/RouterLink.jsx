import { Link as RouterLink } from "react-router-dom";
import "./RouterLink.css";

const Link = ({ children, ...rest }) => {
  return (
    <RouterLink className="link" {...rest}>
      {children}
    </RouterLink>
  );
};

export default Link;
