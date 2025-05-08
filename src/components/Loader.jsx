import React, { useState, useEffect } from 'react';
// Importa tus imágenes
import coinImage from '../../public/images/cooin.png';
import anotherImage from '../../public/images/aarbol.png'; // Agrega otras imágenes

const Loader = () => {
  const [image, setImage] = useState(coinImage); // Inicializa con la primera imagen
  const [fade, setFade] = useState(true); // Estado para controlar la animación de desvanecimiento
  const images = [coinImage, anotherImage]; // Lista de imágenes a alternar
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Inicia el desvanecimiento
      setTimeout(() => {
        index = (index + 1) % images.length; // Cambia la imagen cada segundo
        setImage(images[index]);
        setFade(true); // Restaura el desvanecimiento después de cambiar la imagen
      }, 500); // Tiempo de espera antes de cambiar la imagen (coincide con el tiempo de desvanecimiento)
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <div className="loader-ring">
        {/* Anillos de carga definidos */}
        <div className="rotating-ring clockwise">
          <div className="half-ring orange"></div>
        </div>
        <div className="rotating-ring counter-clockwise">
          <div className="half-ring green"></div>
        </div>

        {/* Imagen central con animación de desvanecimiento */}
        <div className="logo-content">
          <img
            src={image}
            alt="Logo"
            className={`logo ${fade ? 'fade-in' : 'fade-out'}`} // Controla la animación de desvanecimiento
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
