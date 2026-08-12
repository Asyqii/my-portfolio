import { useEffect, useState, type FC } from "react";
import { Menu, X, Download } from "lucide-react";

type Section = "home" | "services" | "about" | "portfolio" | "contact";

interface NavbarProps {
  activeSection: Section;
}

const LINKS: { id: Section; label: string; href: string }[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "services", label: "Services", href: "#services" },
  { id: "about", label: "About me", href: "#about" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "contact", label: "Contact me", href: "#contact" },
];

const CV_HREF = "/CV_ATS_Ahmad_Suyuti_Syauqi.pdf";

const Navbar: FC<NavbarProps> = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Solidify the bar once the page moves, so it reads against the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on Escape, and lock body scroll while it is open.
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-dark/85 backdrop-blur-md"
          : "border-b border-transparent bg-dark/40 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-content items-center justify-between px-4 py-4 md:px-8"
      >
        <a
          href="#home"
          className="rounded-md bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-bold text-transparent"
        >
          Kii.
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map(({ id, label, href }) => {
            const isActive = activeSection === id;
            return (
              <li key={id}>
                <a
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-md py-1 text-sm transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:text-white ${
                    isActive
                      ? "text-primary after:w-full"
                      : "text-gray-400 after:w-0 hover:after:w-full"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            className="hidden rounded-md bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium transition duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/25 md:inline-flex md:items-center md:gap-2"
            href={CV_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={16} aria-hidden="true" />
            Download CV
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-gray-300 transition-colors hover:border-primary/50 hover:text-white md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer — below md there was previously no navigation at all. */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-white/10 bg-dark/95 backdrop-blur-md md:hidden"
      >
        <ul className="mx-auto max-w-content px-4 py-2">
          {LINKS.map(({ id, label, href }) => (
            <li key={id}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                aria-current={activeSection === id ? "page" : undefined}
                className={`flex min-h-[44px] items-center rounded-md px-2 text-base transition-colors ${
                  activeSection === id
                    ? "text-primary"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="py-3">
            <a
              href={CV_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent px-5 font-medium"
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
