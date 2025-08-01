import { useState, useEffect, useRef } from "react";
import "./animations.css";


const useIntersectionObserver = (
  ids,
  options = { threshold: 0.2, rootMargin: "0px 0px -50px 0px", once: true }
) => {
  const [state, setState] = useState({});
  const direction = useRef("down");
  const lastY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const currentY = entry.boundingClientRect.top;
        direction.current = currentY < lastY.current ? "down" : "up";
        lastY.current = currentY;

        setState((prev) => ({
          ...prev,
          [entry.target.id]: {
            visible: entry.isIntersecting || (!options.once ? prev[entry.target.id]?.visible : true),
            ratio: entry.intersectionRatio,
            direction: direction.current,
          },
        }));
      });
    }, options);

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids, options]);

  return state;
};

export default useIntersectionObserver;
