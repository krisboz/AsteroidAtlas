import React, { useRef, useEffect } from "react";

const OrbitCanvas = ({ x, y }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set up the canvas dimensions and clear it
    canvas.width = 800; // Set the canvas width
    canvas.height = 800; // Set the canvas height
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Calculate the canvas center
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Draw a point for the asteroid's position
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
    ctx.beginPath();
    const pointSize = 105; // Adjust the point size as needed
    ctx.arc(centerX + x, centerY - y, pointSize, 0, 2 * Math.PI);
    ctx.fill();
  }, [x, y]);

  return <canvas ref={canvasRef} />;
};

export default OrbitCanvas;
