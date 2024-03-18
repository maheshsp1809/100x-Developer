import React from "react";
import ReusableCard from "./ReusableCard";
import BusinessCard from "./BusinessCard";

const Apps = () => {
  const sampleCards = [
    {
      name: "John Doe",
      description: "Frontend Developer",
      socialMedia: [
        { name: "LinkedIn", url: "https://www.linkedin.com/" },
        { name: "Twitter", url: "https://twitter.com/" },
      ],
      interests: ["React", "JavaScript", "UI/UX Design"],
    },
    {
      name: "Jane Smith",
      description: "Backend Developer",
      socialMedia: [
        { name: "GitHub", url: "https://github.com/" },
        { name: "Instagram", url: "https://www.instagram.com/" },
      ],
      interests: ["Node.js", "Python", "Database Design"],
    },
    {
      name: "Jane Smith",
      description: "Backend Developer",
      socialMedia: [
        { name: "GitHub", url: "https://github.com/" },
        { name: "Instagram", url: "https://www.instagram.com/" },
      ],
      interests: ["Node.js", "Python", "Database Design"],
    },
    // Add more cards as needed
  ];

  const dummyData = {
    name: "John Doe",
    description: "Software Developer | AI Enthusiast",
    linkedin: "https://www.linkedin.com/in/johndoe/",
    twitter: "https://twitter.com/johndoe",
    otherSocialMedia: {
      label: "GitHub",
      link: "https://github.com/johndoe",
    },
    interests: ["Coding", "AI", "Cybersecurity"],
  };

  return (
    <>
      <h1>Business Card App</h1>
      <div className="cards-container">
        {sampleCards.map((card, index) => (
          <ReusableCard key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default Apps;
