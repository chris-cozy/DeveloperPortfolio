import React, { useEffect, useState } from "react";
import "./MouseTracker.css"; // Import the CSS file for styling

export const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e) => {
    setTargetPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const updatePosition = () => {
      setPosition((prevPosition) => ({
        x: lerp(prevPosition.x, targetPosition.x, 0.1),
        y: lerp(prevPosition.y, targetPosition.y, 0.1),
      }));
    };

    document.addEventListener("mousemove", updateMousePosition);
    const animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetPosition]);

  // Linear interpolation function
  const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
  };

  return (
    <div
      className="mouse-tracker"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};
