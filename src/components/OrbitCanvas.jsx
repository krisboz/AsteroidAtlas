import { useEffect, useRef } from "react";

const OrbitCanvas = ({ points }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set up the canvas
    ctx.fillStyle = "black"; // Background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the asteroid's orbit as a path
    ctx.strokeStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < points.length; i++) {
      const [x, y] = points[i];
      const scaledX = x * 100; // Adjust the scaling factor as needed
      const scaledY = y * 100; // Adjust the scaling factor as needed
      if (i === 0) {
        ctx.moveTo(scaledX, scaledY);
      } else {
        ctx.lineTo(scaledX, scaledY);
      }
    }
    ctx.stroke();
  }, [points]);

  return <canvas ref={canvasRef} width={400} height={400} />;
};

export default OrbitCanvas;
