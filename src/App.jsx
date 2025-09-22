// App.jsx
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const ROWS = 15;
const COLS = 20;

// Function to calculate color based on distance
const getWaveColor = (distance) => {
  const norm = distance / COLS;
  const hue = 180 + norm * 110;
  const lightness = 60 - norm * 20;
  return `hsl(${hue}, 90%, ${lightness}%)`;
};

const App = () => {
  const [activeCol, setActiveCol] = useState(0);
  const [forward, setForward] = useState(true);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCol((prev) => {
        if (forward) {
          if (prev < COLS - 1) return prev + 1;
          setForward(false);
          return prev - 1;
        } else {
          if (prev > 0) return prev - 1;
          setForward(true);
          return prev + 1;
        }
      });
    }, 100); // slower so it's easier to see

    return () => clearInterval(interval);
  }, [forward]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl text-cyan-400 mb-6">Reactive Scanner</h1>

      <div
        className="grid gap-0.5"
        style={{
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          width: "80vw",
          maxWidth: "800px",
          aspectRatio: "20 / 15",
        }}
      >
        {Array.from({ length: ROWS }).map((_, row) =>
          Array.from({ length: COLS }).map((_, col) => {
            const distance = Math.abs(col - activeCol);
            const color = getWaveColor(distance);

            // Animate using GSAP on every render
            const style = { backgroundColor: color };
            return (
              <div
                key={`${row}-${col}`}
                className="w-full h-full rounded-sm border border-gray-700"
                style={style}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;
