import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setFollower({ x: e.clientX, y: e.clientY }), 80);
    };

    const onHoverIn = () => setHovering(true);
    const onHoverOut = () => setHovering(false);

    window.addEventListener("mousemove", onMove);

    const interactables = document.querySelectorAll("a, button, [data-cursor]");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onHoverIn);
      el.addEventListener("mouseleave", onHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  // Only show on non-touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          transform: hovering ? "scale(3)" : "scale(1)",
          opacity: hovering ? 0.5 : 1,
        }}
      />
      <div
        className="custom-cursor-follower"
        style={{
          left: follower.x - 16,
          top: follower.y - 16,
          transform: hovering ? "scale(1.5)" : "scale(1)",
        }}
      />
    </>
  );
}
