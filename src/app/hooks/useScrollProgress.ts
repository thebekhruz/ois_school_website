import { useScroll, useTransform, MotionValue } from 'motion/react';
import { RefObject, useEffect, useState } from 'react';

interface UseScrollProgressOptions {
  target?: RefObject<HTMLElement>;
  offset?: [string, string];
}

export function useScrollProgress({ target, offset = ["start start", "end start"] }: UseScrollProgressOptions = {}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only use target if it's mounted and available
  const scrollOptions = isMounted && target ? { target, offset } : { offset };
  
  const { scrollYProgress } = useScroll(scrollOptions);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return {
    scrollYProgress,
    heroOpacity,
    heroScale,
    heroY,
  };
}