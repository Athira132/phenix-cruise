import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Hide custom cursor on touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setHidden(false);

    const handleMouseMove = (e: MouseEvent) => {
      // Small latency lag for the outer circle
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Fast tracking for the inner dot
      setDotPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Attach to all buttons, links and inputs
    const addHoverEvents = () => {
      const hoverables = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .hoverable');
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", handleLinkHoverStart);
        el.addEventListener("mouseleave", handleLinkHoverEnd);
      });
    };

    addHoverEvents();

    // Create a MutationObserver to watch for dynamic DOM changes (e.g. filters in gallery)
    const observer = new MutationObserver(addHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
      const hoverables = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .hoverable');
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHoverStart);
        el.removeEventListener("mouseleave", handleLinkHoverEnd);
      });
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      {/* Outer circle */}
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : linkHovered ? 1.5 : 1})`,
          backgroundColor: linkHovered ? "rgba(15, 118, 110, 0.1)" : "transparent",
          borderColor: linkHovered ? "#C9A227" : "#0F766E",
        }}
      />
      {/* Inner dot */}
      <div
        className="custom-cursor-dot hidden md:block"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 1.5 : linkHovered ? 0.5 : 1})`,
          backgroundColor: linkHovered ? "#0F766E" : "#C9A227",
        }}
      />
    </>
  );
}
