// Sukurkite aplikaciją kuri ištraukia duomenis iš https://jsonplaceholder.typicode.com/photos 
// ir atvaizduoja ją Photo.jsx komponente. Photo komponentas turi turėsi imageUrl ir title parametrus

import { useEffect, useState } from "react";
import Photo from "../Photo/Photo";
import "./Photos.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const photosExists = photos.length > 0;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((resp) => resp.json())
    .then((response) => {setPhotos(response)})
    .catch((error) => console.error(error));
  }, []);

  return (
    <div className="photos">
      {photosExists && (
        <>
          <Photo title={photos[0].title} imageURL={photos[0].url} />
          <Photo title={photos[1].title} imageURL={photos[1].url} />
          <Photo title={photos[2].title} imageURL={photos[2].url} />
        </>
      )}     
    </div>
  );
};

export default Photos;