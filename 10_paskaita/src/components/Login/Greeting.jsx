import { useContext } from "react";
import { userContext } from "../../contexts/userContext";

const Greeting = () => {
  const { user } = useContext(userContext);

  return <h2>{user ? `${user.username}, dėkojame už pateiktą informaciją!` : "Sveiki!"}</h2>;
};

export default Greeting;
