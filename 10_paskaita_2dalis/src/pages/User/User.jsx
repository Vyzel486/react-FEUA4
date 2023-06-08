import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import "./User.css";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setUser(response);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="user">
      <Header />
      <div className="output">
        {user ? (
          <Card
            name={user.name}
            email={user.email}
            city={user.address.city}
            zipcode={user.address.zipcode}
          />
        ) : (
          <p>Loading user...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default User;
