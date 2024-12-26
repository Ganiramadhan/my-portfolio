import React, { useRef, useState } from 'react';

const DragScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, scrollLeft: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition({
      x: e.pageX - scrollRef.current.offsetLeft,
      scrollLeft: scrollRef.current.scrollLeft,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startPosition.x) * 2;
    scrollRef.current.scrollLeft = startPosition.scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      style={{
        overflowX: 'auto',
        cursor: isDragging ? 'grabbing' : 'grab',
        whiteSpace: 'nowrap',
        width: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default DragScrollContainer;
