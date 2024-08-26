import React from 'react'
import "./Home.css";

export const Home = () => {
  return (
    <div className="carousel container" data-bs-ride="carousel" id="mainCarousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="First Slide"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="1"
          aria-label="Second Slide"
        ></button>
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="2"
          aria-label="Third Slide"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src=".../../../img/Image1.jpg"
            className="d-block w-100 carousel-photo"
            alt="First slide"
          />
          <div className="carousel-caption">
            <h5 className="animated fadeInDown" style={{ animationDelay: '1s' }}>
              Explora Nuevas Realidades
            </h5>
            <p
              className="animated fadeInUp d-none d-md-block"
              style={{ animationDelay: '2s' }}
            >
              Sumérgete en experiencias únicas.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src=".../../../img/Image2.jpg"
            className="d-block w-100 carousel-photo"
            alt="Second slide"
          />
          <div className="carousel-caption">
            <h5 className="animated fadeInDown" style={{ animationDelay: '1s' }}>
              Vive el Futuro Hoy
            </h5>
            <p
              className="animated fadeInUp d-none d-md-block"
              style={{ animationDelay: '2s' }}
            >
              Tu viaje comienza aquí.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src=".../../../img/Image3.jpg"
            className="d-block w-100 carousel-photo"
            alt="Third slide"
          />
          <div className="carousel-caption">
            <h5 className="animated fadeInDown" style={{ animationDelay: '1s' }}>
              Más Allá de la Imaginación
            </h5>
            <p
              className="animated fadeInUp d-none d-md-block"
              style={{ animationDelay: '2s' }}
            >
              Donde los sueños se hacen realidad.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default Home;