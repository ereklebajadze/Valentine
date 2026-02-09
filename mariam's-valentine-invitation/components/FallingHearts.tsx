import React, { useEffect, useState } from 'react';
import { Heart } from '../types';

const EMOJIS = ['❤️', '💖', '💗', '💓', '💞', '💕', '🌹'];

const FallingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const heartCount = 20;
    const initialHearts: Heart[] = Array.from({ length: heartCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -20,
      size: Math.random() * 15 + 15,
      duration: Math.random() * 7 + 8,
      delay: Math.random() * 10,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-heart"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
};

export default FallingHearts;