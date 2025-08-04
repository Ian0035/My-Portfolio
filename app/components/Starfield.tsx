import { useState, useEffect, useRef } from "react";


const layers = [
  { count: 70, sizeRange: [2, 3.5], parallaxFactor: 20, opacity: 0.9 },
  { count: 50, sizeRange: [1.5, 2.5], parallaxFactor: 10, opacity: 0.7 },
  { count: 30, sizeRange: [1, 1.8], parallaxFactor: 5, opacity: 0.5 },
];

function StarField() {
  const [targetMousePos, setTargetMousePos] = useState({ x: 0.5, y: 0.5 });
  const currentMousePos = useRef({ x: 0.5, y: 0.5 });
  const animationFrameId = useRef<number | null>(null);
  const [, setRender] = useState(0);

type Star = {
  size: number;
  top: number;
  left: number;
  twinkleDuration: number;
  twinkleDelay: number;
};

const starsRef = useRef<Star[][]>([]);
  

  // Generate stars once
  useEffect(() => {
    const generatedStars = layers.map(({ count, sizeRange }) =>
      [...Array(count)].map(() => ({
        size:
          Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
        top: Math.random() * 100,
        left: Math.random() * 100,
        twinkleDuration: 2 + Math.random() * 3,
        twinkleDelay: Math.random() * 5,
      }))
    );
    starsRef.current = generatedStars;
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth parallax animation
  useEffect(() => {
    const ease = 0.1;

    function animate() {
      currentMousePos.current.x +=
        (targetMousePos.x - currentMousePos.current.x) * ease;
      currentMousePos.current.y +=
        (targetMousePos.y - currentMousePos.current.y) * ease;

      setRender((r) => r + 1);
      animationFrameId.current = requestAnimationFrame(animate);
    }

    animationFrameId.current = requestAnimationFrame(animate);

  return () => {
    if (animationFrameId.current !== null) {
      cancelAnimationFrame(animationFrameId.current);
    }
};  }, [targetMousePos]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="w-full h-full relative">
        {starsRef.current.map((layerStars, layerIndex) =>
          layerStars.map((star, i) => {
            const { size, top, left, twinkleDuration, twinkleDelay } = star;
            const { parallaxFactor, opacity } = layers[layerIndex];

            const offsetX =
              (currentMousePos.current.x - 0.5) * parallaxFactor;
            const offsetY =
              (currentMousePos.current.y - 0.5) * parallaxFactor;

            return (
              <div
                key={`${layerIndex}-${i}`}
                className="absolute bg-white rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                  opacity,
                  transform: `translate(${offsetX}px, ${offsetY}px)`,
                  animation: `twinkle ${twinkleDuration}s infinite ease-in-out`,
                  animationDelay: `${twinkleDelay}s`,
                  filter: "drop-shadow(0 0 3px white)",
                }}
              />
            );
          })
        )}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default StarField;
