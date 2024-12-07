import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state, theme } = useContextGlobal(); 
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className={`favs-container ${theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((dentist) => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          ))
        ) : (
          <p>No hay dentistas destacados.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
