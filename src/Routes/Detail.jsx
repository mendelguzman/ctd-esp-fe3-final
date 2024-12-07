import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams();
  const { theme } = useContextGlobal(); // Asegúrate de que 'theme' está disponible aquí
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setDentist(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar los detalles del dentista');
        setLoading(false);
      }
    };

    fetchDentist();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={`detail-container ${theme}`}>
      <h1>Detalles del Dentista</h1>
      {dentist ? (
        <div className="detail-card">
          <h2>{dentist.name}</h2>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Teléfono:</strong> {dentist.phone}</p>
          <p><strong>Sitio Web:</strong> <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
        </div>
      ) : (
        <p>Detalle no disponible</p>
      )}
    </div>
  );
};

export default Detail;