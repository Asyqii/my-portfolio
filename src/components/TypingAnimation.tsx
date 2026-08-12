import { useEffect, useRef } from "react";
import Typed from "typed.js";

const STRINGS = ["Fullstack Developer", "Android Developer", "QA Engineer"];

const TypingAnimation = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

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
    <p className="min-h-[1.2em] text-4xl font-bold leading-tight tracking-tight md:text-5xl">
      <span
        ref={el}
        className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
      />
    </p>
  );
};

export default TypingAnimation;
