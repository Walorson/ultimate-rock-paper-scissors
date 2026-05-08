import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const icons = ["✂", "📄", "🔘"];
    const particles = [];

    function spawnParticle() {
      return {
        x: -50,
        y: Math.random() * canvas.height,
        size: 24 + Math.random() * 20,
        speedX: 3 + Math.random() * 6,
        drift: (Math.random() - 0.5) * 2,
        icon: icons[Math.floor(Math.random() * icons.length)]
      };
    }

    for (let i = 0; i < 50; i++) particles.push(spawnParticle());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        ctx.font = `${p.size}px serif`;
        ctx.fillText(p.icon, p.x, p.y);

        p.x += p.speedX;
        p.y += p.drift;
        p.drift += (Math.random() - 0.5) * 0.3;

        if (p.x > canvas.width + 100) {
          particles[i] = spawnParticle();
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none"
      }}
    />
  );
}