import React from 'react';
import GlowButton from './GlowButton';

const Hero = () => {
  return (
    <div className="w-full py-12 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block mb-4 px-4 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium">
          AI-Powered Communication
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-abc-repro bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Meet Your AI Avatar
        </h1>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Experience the future of communication with our AI-powered avatar. 
          Interact naturally with a digital assistant that sees, hears, and responds to you in real-time.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <GlowButton variant="primary" size="lg">
            Get Started
          </GlowButton>
          <GlowButton variant="secondary" size="lg">
            Learn More
          </GlowButton>
        </div>
      </div>
    </div>
  );
};

export default Hero; 