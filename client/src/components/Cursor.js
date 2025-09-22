import React, { useEffect, useState } from 'react';
import './Cursor.css';
import useMousePosition from '../hooks/useMousePosition';

const Cursor = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`cursor ${isHovering ? 'hovering' : ''}`}
      style={{ left: `${x}px`, top: `${y}px` }}
    />
  );
};

export default Cursor;