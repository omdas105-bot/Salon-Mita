import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: string; // Tailwind delay class e.g. "delay-100"
  animation?: "animate-fade-in-up" | "animate-fade-in" | "animate-zoom-in" | "animate-fade-in-down";
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  delay = "delay-0",
  animation = "animate-fade-in-up",
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  // SAFE FIX:
  // Instead of using 'opacity-0' class which might permanently hide content if animations fail,
  // we rely on the animation class itself to handle the starting opacity (defined in index.html).
  // If isVisible is false, we explicitly set opacity to 0 via style (safest).
  // If isVisible is true, we remove the opacity style and let the animation class take over.
  
  return (
    <div 
      ref={ref} 
      className={`${className} ${delay} ${isVisible ? animation : ''}`}
      style={{ opacity: isVisible ? undefined : 0, transition: 'opacity 0.2s' }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;