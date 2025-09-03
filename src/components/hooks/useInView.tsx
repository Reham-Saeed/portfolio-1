import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useInView = ({ 
  threshold = 0, 
  triggerOnce = false,
  rootMargin = '0px'
}: UseInViewOptions = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const alreadyViewed = useRef(false);

  useEffect(() => {
    if (alreadyViewed.current && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting && triggerOnce) {
          alreadyViewed.current = true;
        }
        
        setInView(isIntersecting);
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, inView };
};