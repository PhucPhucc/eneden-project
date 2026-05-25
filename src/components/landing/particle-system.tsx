"use client";

import { useEffect, useRef } from "react";

export function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let active = true;

    function createParticle() {
      if (!active || !container) return;

      const particle = document.createElement("div");
      const size = Math.random() * 4 + 2;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(195, 200, 194, 0.4);
        border-radius: 50%;
        pointer-events: none;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100 + 20}%;
        will-change: transform, opacity;
      `;

      const duration = Math.random() * 5000 + 4000;
      const xDrift = (Math.random() - 0.5) * 100;
      const yMove = -(Math.random() * 100 + 50);

      const animation = particle.animate(
        [
          { transform: "translate(0, 0)", opacity: 0 },
          { opacity: Math.random() * 0.5 + 0.2, offset: 0.2 },
          {
            transform: `translate(${xDrift}px, ${yMove}px)`,
            opacity: 0,
          },
        ],
        {
          duration,
          easing: "linear",
          fill: "forwards",
        }
      );

      container.appendChild(particle);

      animation.onfinish = () => {
        particle.remove();
        if (active) createParticle();
      };
    }

    const timers: number[] = [];
    for (let i = 0; i < 30; i++) {
      timers.push(window.setTimeout(createParticle, i * 200));
    }

    return () => {
      active = false;
      timers.forEach(clearTimeout);
      container.querySelectorAll("div").forEach((el) => el.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
}
