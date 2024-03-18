// ReusableCard.js
import React from "react";
import "../../styles/ReusableCard.css"; // Import the CSS file

const ReusableCard = (props) => {
  const { name, description, socialMedia, interests } = props;

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>

      <div className="interests">
        <h4>Interests:</h4>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <div className="social-media">
        {socialMedia.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button" // Add a class for styling
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ReusableCard;
