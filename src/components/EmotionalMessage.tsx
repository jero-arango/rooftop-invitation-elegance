
import React from 'react';

interface EmotionalMessageProps {
  userName: string;
}

const EmotionalMessage = ({ userName }: EmotionalMessageProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            Querido {userName}
          </h2>
          
          <div className="space-y-6 text-lg text-white/90 leading-relaxed">
            <p className="text-2xl font-light italic text-amber-300">
              "La vida está hecha de momentos que se convierten en recuerdos eternos"
            </p>
            
            <p>
              Esta noche, las estrellas serán testigos de algo extraordinario. En lo alto de la ciudad, 
              donde el cielo se encuentra con nuestros sueños, te esperamos para vivir una experiencia 
              que tocará tu alma.
            </p>
            
            <p>
              No será solo una fiesta... será un encuentro de corazones, una celebración de la vida 
              y un momento donde el tiempo se detendrá para permitirnos ser completamente libres.
            </p>
            
            <p className="text-xl font-semibold text-amber-400">
              Tu presencia es el ingrediente que falta para hacer de esta noche algo mágico.
            </p>
            
            <p className="text-lg text-white/80">
              Ven, déjate llevar por la música, la brisa nocturna y la compañía de quienes 
              realmente importan. Porque hay noches que están destinadas a ser recordadas para siempre.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              No te pierdas esta experiencia única
            </p>
            <p className="text-white/70 mt-4 italic">
              Porque algunos momentos solo suceden una vez en la vida...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalMessage;
