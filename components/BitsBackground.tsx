'use client';

import { useEffect, useRef } from 'react';

export default function BitsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Characters to display
    const chars = ['0', '1'];
    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = [];

    // Initialize drop positions randomly over the screen
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * Math.floor(height / fontSize);
    }

    const draw = () => {
      // Soft dark overlay to create the fading trailing effect behind the raining bits
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Setup the glowing red bits
      ctx.fillStyle = 'rgba(255, 0, 51, 0.45)'; // Neon Tron Red
      ctx.font = `${fontSize}px "Orbitron", monospace`;
      ctx.textAlign = 'center';

      for (let i = 0; i < drops.length; i++) {
        // Pick a random bit
        const text = chars[Math.floor(Math.random() * chars.length)];

        // Draw the bit
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // If the bit reaches the bottom, randomly send it back to the top
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment Y coordinate slowly to create the "falling" effect
        drops[i] += 0.5;
      }
    };

    const intervalId = setInterval(draw, 35); // Adjust for speed

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * height;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -5,
        pointerEvents: 'none',
      }}
    />
  );
}
