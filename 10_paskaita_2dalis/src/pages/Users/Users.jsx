import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((response) => {
        setIsLoading(false);
        setUsers(response.slice(0,6));
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCardClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  const handleSearch = (query) => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  return (
    <div className="users">
      <Header handleSearch={handleSearch} />
      <div className="cards">
        {isLoading && <p>Loading...</p>}
        {!isLoading && users.length === 0 && <p>No users found..</p>}
        {users.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id}>
            <div onClick={() => handleCardClick(user.id)}>
              <Card
                name={user.name}
                email={user.email}
                city={user.address.city}
                zipcode={user.address.zipcode}
              />
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Users;
