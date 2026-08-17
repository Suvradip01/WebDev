import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          Welcome to My Portfolio
        </h1>
        <p className="text-zinc-400 text-lg max-w-md mx-auto">
          I am a software developer focused on building modern web applications 
          and AI-driven solutions.
        </p>
      </div>
    </div>
  );
};

export default Home;