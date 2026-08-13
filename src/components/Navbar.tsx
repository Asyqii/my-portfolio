import { useEffect, useState, type FC } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { buttonClasses } from "./ui/buttonClasses";
import { useTheme } from "../hooks/useTheme";

type Section = "home" | "services" | "about" | "portfolio" | "contact";

interface NavbarProps {
  activeSection: Section;
}

const LINKS: { id: Section; label: string; href: string }[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "services", label: "Services", href: "#services" },
  { id: "about", label: "About", href: "#about" },
  { id: "portfolio", label: "Work", href: "#portfolio" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const CV_HREF = "/CV_ATS_Ahmad_Suyuti_Syauqi.pdf";

/* 48px header, transparent, no blur, no bottom border. */
const Navbar: FC<NavbarProps> = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main"
        className="mx-auto flex h-12 max-w-container items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <a
          href="#home"
          className="rounded-[4px] font-mono text-xs tracking-[0.16em] text-foreground transition-all focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
        >
          KII.
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {LINKS.map(({ id, label, href }) => {
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <a
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-[4px] px-2.5 py-1.5 text-xs transition-all hover:text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 ${
                    isActive ? "text-foreground" : "text-foreground/60"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className={buttonClasses("ghost", "sm", "h-7 w-7 px-0")}
          >
            {isDark ? (
              <Sun size={14} aria-hidden="true" />
            ) : (
              <Moon size={14} aria-hidden="true" />
            )}
          </button>

          {/* The single primary action in this view. */}
          <a
            href={CV_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses("default", "sm", "hidden md:inline-flex")}
          >
            Download CV
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={buttonClasses("ghost", "sm", "h-11 w-11 px-0 md:hidden")}
          >
            {menuOpen ? (
              <X size={18} aria-hidden="true" />
            ) : (
              <Menu size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Below md there is otherwise no navigation at all. */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-border bg-popover md:hidden"
      >
        <ul className="mx-auto max-w-container px-5 py-2 sm:px-8">
          {LINKS.map(({ id, label, href }) => (
            <li key={id}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                aria-current={activeSection === id ? "page" : undefined}
                className={`flex min-h-[44px] items-center rounded-[4px] px-2.5 text-xs transition-all ${
                  activeSection === id ? "text-foreground" : "text-foreground/60"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="py-2">
            <a
              href={CV_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className={buttonClasses("default", "cta", "w-full")}
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
