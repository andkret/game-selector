import React from 'react';

// Drop your image files into /public and reference by filename below.
// During build, Vite will prefix with the correct base (import.meta.env.BASE_URL).
const games = [
  {
    title: 'Spark Optimization',
    description: 'Try to optimize a spark job by turning the right "knobs"',
    imageName: 'Spark-Optimization.png',
    link: 'https://andkret.github.io/spark-optimization/'
  },
  {
    title: 'LLM Embeddings',
    description: 'Experience the fundamental technique behind LLMs and RAG applications',
    imageName: 'Embedding-Playground.png',
    link: 'https://andkret.github.io/embedding-playground/'
  },
  {
    title: 'Pipeline Builder',
    description: 'Create your platform architecture and explore existing ones',
    imageName: 'pipeline-Builder.png',
    link: 'https://andkret.github.io/etl-pipeline-app/'
  },
  {
    title: 'Streaming Playground',
    description: 'Learn how to find out where a streaming pipeline goes wrong',
    imageName: 'Streaming-Playground.png',
    link: 'https://andkret.github.io/streaming-playground/'
  }
];

export default function App() {
  const promoLink = 'https://learndataengineering.com'; // TODO: replace with your actual site URL
  return (
    <div className="container">
      <h1>Select a playground</h1>
      <div className="grid">
        {games.map((game) => (
          <div key={game.title} className="card">
            <a
              href={game.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <h2>{game.title}</h2>
              <p className="description">{game.description}</p>
              <img
                src={`${import.meta.env.BASE_URL}${game.imageName}`}
                alt={game.title}
                className="card-image"
              />
            </a>
          </div>
        ))}
      </div>
      {/* Promotional section */}
      <div className="promo">
        <p className="promo-text">
          Check out our Academy & Coaching:
          <a href={promoLink} target="_blank" rel="noopener noreferrer">
            <img
              src={`${import.meta.env.BASE_URL}LDE-Logo.png`}
              alt="LDE Logo"
              className="promo-logo"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
