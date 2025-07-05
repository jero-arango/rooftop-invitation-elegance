
import React from 'react';

const HostSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-t from-black/80 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-amber-500/20 to-orange-600/20 backdrop-blur-xl rounded-3xl p-12 border border-amber-500/30 shadow-2xl">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-purple-900 flex items-center justify-center">
                <span className="text-3xl font-bold text-amber-400">A</span>
              </div>
            </div>
            
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Anfitrión
            </h3>
            
            <p className="text-2xl text-white/90 font-light mb-6">
              Con mucho cariño
            </p>
          </div>
          
          <div className="border-t border-amber-500/30 pt-8">
            <p className="text-3xl font-bold text-white mb-4">
              "Noches que Brillan Bajo las Estrellas"
            </p>
            <p className="text-lg text-amber-300 italic">
              Una celebración donde cada alma encuentra su luz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostSection;
