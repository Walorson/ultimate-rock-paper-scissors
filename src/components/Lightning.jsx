import { useEffect, useRef } from "react";
import "./Lightning.css";

export default function Lightning() {
  const svgRef = useRef(null);

  function generateLightningLine(offsetY) {
    const width = window.innerWidth;
    const segments = 14;
    const points = [];

    // PIERWSZY PUNKT — LEWA KRAWĘDŹ EKRANU
    let x = 0;
    let y = offsetY + (Math.random() - 0.5) * 20;
    points.push(`${x},${y}`);

    // KOLEJNE SEGMENTY
    for (let i = 1; i <= segments; i++) {
      x = (width / segments) * i;
      y += (Math.random() - 0.5) * 40;
      points.push(`${x},${y}`);
    }

    return points.join(" ");
  }

  function renderLightning() {
    const svg = svgRef.current;
    svg.innerHTML = "";

    const lineCount = 6;

    for (let i = 0; i < lineCount; i++) {
      const poly = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
      const offsetY = 40 + i * 12;
      poly.setAttribute("points", generateLightningLine(offsetY));
      poly.classList.add("lightning-line");
      svg.appendChild(poly);
    }
  }

  useEffect(() => {
    renderLightning();
    const interval = setInterval(renderLightning, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg ref={svgRef} className="lightning"></svg>
  );
}