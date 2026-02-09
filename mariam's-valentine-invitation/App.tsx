import React, { useState } from 'react';
import FallingHearts from './components/FallingHearts';

// Requested sequence for the "No" button
const NO_TEXTS = ["No", "Are You Sure?", "Pleasee!!!"];

const App: React.FC = () => {
  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const handleNoClick = () => {
    if (noCount < 3) {
      setNoCount((prev) => prev + 1);
    }
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  // Scaling logic: Yes button grows, No button shrinks
  const yesButtonScale = 1 + noCount * 0.7; 
  const noButtonScale = Math.max(0.3, 1 - noCount * 0.25);
  // After 3 clicks on "No", only "Yes" remains
  const showNoButton = noCount < 3;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4 py-4 bg-[#fff0f3]">
      <FallingHearts />

      <div className="bg-white/80 backdrop-blur-xl p-6 sm:p-10 md:p-14 rounded-[2.5rem] sm:rounded-[4rem] shadow-[0_30px_60px_-15px_rgba(255,105,180,0.3)] z-10 text-center max-w-full sm:max-w-md w-full transition-all duration-700 border border-white/50 ring-1 ring-white/20">
        {!accepted ? (
          <div className="flex flex-col items-center">
            {/* Romantic GIF */}
            <div className="relative mb-6 h-44 sm:h-56 flex items-center justify-center w-full">
              <img 
                src="https://www.gifcen.com/wp-content/uploads/2022/11/love-gif-5.gif" 
                alt="Romantic Animation" 
                className="max-h-full rounded-[2rem] shadow-2xl object-contain border-4 border-white/40"
              />
            </div>
            
            <div className="space-y-1 sm:space-y-2 mb-8 sm:mb-12">
              <h1 className="text-5xl sm:text-7xl font-romantic text-rose-600 drop-shadow-sm">
                Mariam,
              </h1>
              <h2 className="text-2xl sm:text-3xl font-romantic text-rose-500 font-bold px-2 leading-tight">
                Will You Be My Valentine?
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 w-full min-h-[180px]">
              {/* YES BUTTON DESIGN - Beautiful Pink Gradient */}
              <div className="flex items-center justify-center order-1 sm:order-none">
                <button
                  onClick={handleYesClick}
                  style={{ 
                    transform: `scale(${yesButtonScale})`,
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                  className={`
                    relative bg-gradient-to-r from-rose-400 via-pink-500 to-fuchsia-500 
                    text-white font-bold py-4 px-12 rounded-full shadow-[0_10px_20px_rgba(244,63,94,0.4)]
                    z-30 whitespace-nowrap text-xl sm:text-2xl active:scale-90 touch-none
                    border-b-4 border-rose-700 overflow-hidden group
                    ${noCount === 0 ? 'animate-pulse' : ''}
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Yes <span className="text-xl">❤️</span>
                  </span>
                  {/* Glossy shine effect */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
                </button>
              </div>

              {/* NO BUTTON DESIGN */}
              {showNoButton && (
                <div className="flex items-center justify-center order-2 sm:order-none">
                  <button
                    onClick={handleNoClick}
                    style={{ 
                      transform: `scale(${noButtonScale})`,
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                    className="
                      bg-white/40 backdrop-blur-sm border border-rose-200
                      text-rose-500 font-semibold py-2 px-8 rounded-full shadow-lg
                      whitespace-nowrap text-base sm:text-lg active:scale-95 touch-none
                      hover:bg-rose-50 transition-colors duration-300
                    "
                  >
                    {NO_TEXTS[noCount]}
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center animate-in zoom-in duration-700">
            <div className="h-48 sm:h-64 mb-8 flex items-center justify-center">
              <img 
                src="https://www.gifcen.com/wp-content/uploads/2021/02/love-gif-3.gif" 
                alt="Success Hug" 
                className="max-h-full rounded-3xl shadow-2xl object-contain border-4 border-white/60"
              />
            </div>
            <h1 className="text-5xl sm:text-7xl font-romantic text-rose-600 mb-4 animate-bounce">
              yeeeeeeees!
            </h1>
            <p className="text-2xl sm:text-4xl font-romantic font-bold text-rose-500 leading-tight px-4 tracking-wide">
              congratulation my love ❤️❤️❤️
            </p>
            <div className="mt-10 flex justify-center gap-6">
                <span className="text-6xl animate-pulse">💖</span>
                <span className="text-6xl animate-pulse" style={{ animationDelay: '0.2s' }}>🌹</span>
                <span className="text-6xl animate-pulse" style={{ animationDelay: '0.4s' }}>💝</span>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-6 left-0 right-0 flex justify-between px-8 pointer-events-none opacity-50">
        <span className="text-base sm:text-xl font-romantic text-rose-400 italic">With all my love</span>
        <span className="text-base sm:text-xl font-romantic text-rose-400 italic">forever...</span>
      </div>
    </div>
  );
};

export default App;