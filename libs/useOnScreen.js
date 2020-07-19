import { useState, useEffect, useRef } from "react";

function useOnScreen(ref, callback) {
  useEffect(() => {
    if (typeof Window !== undefined) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio === 1) {
            callback();
          }
        },
        {
          root: null,
          rootMargin: "100px",
          threshold: 1.0,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    }
  }, []);
}

export default useOnScreen;
