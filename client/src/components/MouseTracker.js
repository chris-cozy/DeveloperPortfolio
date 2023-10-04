import React, { useEffect, useState } from "react";
import "./MouseTracker.css"; // Import the CSS file for styling

export const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateMousePosition);
    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="mouse-tracker"
      style={{ left: position.x, top: position.y }}
    />
  );
};
