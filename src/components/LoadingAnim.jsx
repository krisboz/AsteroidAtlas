import React from "react";
import "../styles/components/LoadingAnim.scss";

const LoadingAnim = () => {
  return (
    <div className="loading-wave">
      <div className="wave">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
};

export default LoadingAnim;
