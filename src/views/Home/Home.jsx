import React from 'react'
import "./Home.css"

export const Home = () => {
    return (
      <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              alt="Imagen 1"
              className="d-block carousel-image"
              src=".../../../img/Social platform 1.jpg"
            />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '1s' }}
              >
                Explore your digital space from now on.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="Imagen 2"
              className="d-block carousel-image"
              src=".../../../img/Social platform 2.jpg"
            />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '1s' }}
              >
                Transform your experience and live a different reality.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="Imagen 3"
              className="d-block carousel-image"
              src=".../../../img/Social platform 3.webp"
            />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ animationDelay: '1s' }}>
              </h5>
              <p
                className="animated bounceInLeft d-none d-md-block"
                style={{ animationDelay: '1s' }}
              >
                A place without frontiers.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
