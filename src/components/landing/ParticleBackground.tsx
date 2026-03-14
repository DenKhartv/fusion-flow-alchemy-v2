import { useMemo } from "react";

const PARTICLE_COUNT = 70;

function lerp(seed: number, min: number, max: number) {
  return min + (seed * (max - min));
}

function createParticles() {
  const particles: Array<{
    left: number;
    top: number;
    size: number;
    duration: number;
    delay: number;
    hue: "white" | "orange";
  }> = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const s = Math.sin(i * 1.3) * 0.5 + 0.5;
    particles.push({
      left: lerp((i * 0.127) % 1, 0, 100),
      top: lerp((i * 0.311) % 1, 0, 100),
      size: lerp((i * 0.07) % 1, 2, 4),
      duration: lerp(s, 22, 38),
      delay: (i * 0.4) % 10,
      hue: i % 6 === 0 ? "orange" : "white",
    });
  }
  return particles;
}

const ParticleBackground = () => {
  const particles = useMemo(createParticles, []);

  return (
    <div
      className="particle-background"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle-dot"
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: p.hue === "orange" ? "hsl(24 100% 70%)" : "hsl(40 6% 95%)",
            animation: `particle-float ${p.duration}s ease-in-out ${p.delay}s infinite alternate, particle-glow ${p.duration * 0.7}s ease-in-out ${p.delay * 0.5}s infinite alternate`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
