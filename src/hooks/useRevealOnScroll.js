import { useEffect, useRef, useState } from "react";

/**
 * Observes an element and toggles visibility once in viewport.
 * @param {number} threshold Intersection ratio to trigger reveal.
 * @returns {[import("react").RefObject<HTMLElement>, boolean]} Ref and state.
 */
const useRevealOnScroll = (threshold = 0.2) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return [elementRef, isVisible];
};

export default useRevealOnScroll;
