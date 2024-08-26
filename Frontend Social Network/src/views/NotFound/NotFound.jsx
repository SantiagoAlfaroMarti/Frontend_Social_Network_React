import React from 'react';
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-container">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Page Not Found</p>
        <p className="notfound-description">
          Oops! It looks like the page you're looking for has been moved or doesn't exist. Please check the URL or go back to the homepage.
        </p>
        <a href="/" className="notfound-link">Back to Home</a>
      </div>
    </div>
  );
};