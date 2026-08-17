import React from 'react';

const Contact = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // This is the line that stops the page from reloading
    
    // Logic for sending the data would go here
    console.log("Form submitted successfully!");
    alert("Message sent! (Simulation)");
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-zinc-400 mb-12">
          I'm currently looking for new opportunities. Whether you have a question 
          or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-400">Contact Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-widest">Email</p>
                <a href="mailto:ghoshsuvradip215@gmail.com" className="text-zinc-300 hover:text-white transition-colors">
                  ghoshsuvradip215@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-widest">Location</p>
                <p className="text-zinc-300">West Bengal, India</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-widest">Socials</p>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-zinc-400 hover:text-blue-500 transition-colors">LinkedIn</a>
                  <a href="#" className="text-zinc-400 hover:text-blue-500 transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* Added onSubmit handler here */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input 
                required
                type="text" 
                placeholder="Name" 
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-zinc-300 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <input 
                required
                type="email" 
                placeholder="Email" 
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-zinc-300 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <textarea 
                required
                rows="4" 
                placeholder="Message" 
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-zinc-300 focus:outline-none focus:border-blue-500 transition-colors"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;