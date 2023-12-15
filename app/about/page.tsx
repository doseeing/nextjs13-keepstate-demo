import React from "react";

const AboutPage: React.FC = () => {
  const randomNumbers = Array(100)
    .fill(1)
    .map((_, i) => Math.random() * i);
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About page!</p>
      {randomNumbers.map((n) => (
        <p key={n}>{n}</p>
      ))}
    </div>
  );
};

export default AboutPage;
