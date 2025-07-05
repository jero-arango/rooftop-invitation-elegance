
import React from 'react';

const VideoSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Una Invitación Especial
        </h2>
        <p className="text-xl text-white/80 mb-12 leading-relaxed">
          Déjate llevar por la magia de lo que te espera en las alturas
        </p>
        
        <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
          <div className="aspect-video bg-gradient-to-br from-slate-800 to-purple-900">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Invitación Especial - Rooftop Party"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
        
        <p className="text-lg text-white/70 mt-8 italic">
          "Cada momento será una obra de arte bajo las estrellas"
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
