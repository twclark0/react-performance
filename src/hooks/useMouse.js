import { useState, useEffect } from "react";
import debounce from "lodash/debounce";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const updateMousePosition = debounce((ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  }, 100);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  return mousePosition;
};

export default useMousePosition;
