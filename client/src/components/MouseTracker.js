import React, { useEffect, useState } from "react";
import "./MouseTracker.css";
import _ from "lodash";

export const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = _.throttle((e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }, 40);

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="mouse-tracker"
      style={{
        left: `${position.x}px`, // Adjust the offset as needed
        top: `${position.y}px`, // Adjust the offset as needed
      }}
    />
  );
};
