
import React from "react";

const bubbles = [
  { size: 65, top: "15%", left: "5%", delay: "0s" },
  { size: 35, top: "60%", left: "12%", delay: "1s" },
  { size: 80, top: "12%", left: "85%", delay: "2s" },
  { size: 40, top: "70%", left: "92%", delay: "1.5s" },
  { size: 25, top: "20%", left: "55%", delay: "0.5s" },
  { size: 50, top: "75%", left: "75%", delay: "2.5s" },
  { size: 30, top: "45%", left: "35%", delay: "1.2s" },
  { size: 55, top: "80%", left: "25%", delay: "3s" },
  { size: 20, top: "30%", left: "95%", delay: "0.8s" },
];

function BubbleBackground() {
  return (
    <div
      className="bubble-container"
      aria-hidden="true"
    >
      {bubbles.map((bubble, index) => (
        <span
          key={index}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            top: bubble.top,
            left: bubble.left,
            animationDelay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
}

export default BubbleBackground;
