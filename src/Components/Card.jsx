import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    const isAlreadyFav = storedFavorites.some(dentist => dentist.id === id);

    if (!isAlreadyFav) {
      const newFavorites = [...storedFavorites, { name, username, id }];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  }

  return (
    <div className="card">
      <img src="../../public/images/doctor.jpg" alt={name} className="card-image" />
      <h3>{name}</h3>
      <p>{username}</p>
      <Link to={`/dentist/${id}`} className="card-link">View Details</Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
