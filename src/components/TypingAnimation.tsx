import { useEffect, useRef } from "react";
import Typed from "typed.js";

const STRINGS = ["Fullstack Developer", "Android Developer", "QA Engineer"];

const TypingAnimation = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    // Honor reduced-motion: show static text, skip the typing loop.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      el.current.textContent = STRINGS[0];
      return;
    }

    const typed = new Typed(el.current, {
      strings: STRINGS,
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
      showCursor: true,
      cursorChar: '<span class="typing-cursor"></span>',
    });

    return () => typed.destroy();
  }, []);

  return (
    <p className="min-h-[1.625em] font-mono text-xs text-muted-foreground">
      <span ref={el} />
    </p>
  );
};

export default TypingAnimation;
