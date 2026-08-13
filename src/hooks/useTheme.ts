import { useCallback, useEffect, useState } from "react";

/**
 * Reads the theme resolved by the inline script in index.html, then keeps
 * <html class="dark"> and localStorage in sync. Dark mode is not a filter —
 * the token layer swaps borders from a grey hex to alpha-white.
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(() =>
    typeof document === "undefined"
      ? true
      : document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode); the class still applies.
    }
  }, [isDark]);

  const toggle = useCallback(() => setIsDark((prev) => !prev), []);

  return { isDark, toggle };
}
