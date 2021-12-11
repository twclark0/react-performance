import { useState, useEffect } from 'react';
// TODO EX:2
// Import debounce from lodash by uncommenting the line below
// import { debounce } from "lodash" // TODO EX:5 Optmize this import as shown in the video

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  // TODO EX:2
  // Create a debounced variant of the below function using `debounce` function from lodash.
  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  return mousePosition;
};

export default useMousePosition;
