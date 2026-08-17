import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 border-b border-blue-500 pb-2 inline-block">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              I am a software developer and postgraduate student currently pursuing my 
              Master of Computer Applications (MCA). I have a strong foundation 
              in building scalable web applications and integrating intelligent features 
              using modern frameworks.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My expertise spans across full-stack development and Artificial Intelligence, 
              with a particular focus on Large Language Models and unique UI/UX designs.
            </p>
          </div>

          <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Technical Stack</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-zinc-300">
              <li>• React & Tailwind</li>
              <li>• Python & FastAPI</li>
              <li>• Java & C</li>
              <li>• LLMs & Transformers</li>
              <li>• Docker & Git</li>
              <li>• SQL & NoSQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;