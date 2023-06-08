import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import './Logout.css';

const Logout = () => {
  const { user, handleLogout } = useContext(userContext);

  return (
    <div className="logout">
      {user && (
        <>
          <button className="logoutButton" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Logout;
