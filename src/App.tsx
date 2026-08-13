import { useEffect, useState } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import Navbar from "./components/Navbar";
import myPhoto2 from "./assets/images/my_photo2.webp";
import appEyesight from "./assets/images/app.webp";
import websiteKonveksi from "./assets/images/website_konveksi.webp";
import pirateLibrary from "./assets/images/pirate_library.webp";
import figmaLogo from "./assets/images/figma.webp";
import reactLogo from "./assets/images/react_logo.webp";
import javascriptLogo from "./assets/images/js_logo.webp";
import kotlinLogo from "./assets/images/kotlin_logo.webp";
import sqlLogo from "./assets/images/sql_logo.webp";
import IconProgress from "./components/IconProgress";
import PortfolioSection from "./components/layout/PortfolioSection";
import TypingAnimation from "./components/TypingAnimation";
import Reveal from "./components/Reveal";
import SectionHeading from "./components/SectionHeading";
import Frame from "./components/ui/Frame";
import { buttonClasses } from "./components/ui/buttonClasses";

const SECTIONS = ["home", "services", "about", "portfolio", "contact"] as const;
type Section = (typeof SECTIONS)[number];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Asyqii" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmadsuyutisyauqi/" },
  { label: "Email", href: "mailto:ahmadsuyutisyauqi@gmail.com" },
];

const STATS = [
  { value: "3+", label: "Years" },
  { value: "10+", label: "Projects" },
  { value: "7+", label: "Clients" },
];

const SERVICES = [
  {
    index: "01",
    title: "Android application",
    image: appEyesight,
    alt: "Eyesight mobile app screens",
    description:
      "Attractive, user-friendly mobile applications for Android, built to match how your business actually works.",
  },
  {
    index: "02",
    title: "Business website",
    image: websiteKonveksi,
    alt: "Klik Konveksi business website",
    description:
      "A site designed around promoting your products or services, with the content structure to support it.",
  },
  {
    index: "03",
    title: "Company profile",
    image: pirateLibrary,
    alt: "Pirate Library company profile website",
    description:
      "Vision, mission, and services presented so a first-time visitor understands the company quickly.",
  },
];

const SKILLS = [
  { logo: figmaLogo, name: "Figma" },
  { logo: reactLogo, name: "React" },
  { logo: "https://cdn.simpleicons.org/nextdotjs/currentColor", name: "Next.js" },
  { logo: javascriptLogo, name: "JavaScript" },
  { logo: kotlinLogo, name: "Kotlin" },
  { logo: sqlLogo, name: "SQL" },
  { logo: "https://cdn.simpleicons.org/supabase/3ECF8E", name: "Supabase" },
];

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

/* Inputs signal focus by border color alone — no ring.
   Use a solid surface: --input carries its own alpha, so Tailwind's /20
   opacity modifier can't resolve it and the field renders near-white.
   bg-background is a solid token with guaranteed contrast against the card. */
const FIELD =
  "h-7 w-full rounded-md border border-input bg-background px-2 text-xs text-foreground shadow-none transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none [&>option]:bg-popover [&>option]:text-foreground";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Track the most-visible section for the nav highlight. Reads batch into a
  // single rAF so a scroll burst does not thrash layout.
  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      let current: Section = "home";
      let maxVisible = -1;

      for (const section of SECTIONS) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const visible =
          Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);

        if (visible > maxVisible) {
          maxVisible = visible;
          current = section;
        }
      }

      setActiveSection((previous) =>
        previous === current ? previous : current
      );
    };

    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    const form = e.currentTarget;

    const formData = new FormData(form);
    formData.append("access_key", "24a89d86-66f7-4729-9b35-07b7464e5a54");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await res.json();

      if (data.success) {
        setSubmitStatus("success");
        setErrorMessage("");
        form.reset();
      } else {
        if (import.meta.env.DEV) console.error("Web3Forms Error Data:", data);
        setErrorMessage(data.message || "Failed to send your message.");
        setSubmitStatus("error");
      }
    } catch (error: unknown) {
      if (import.meta.env.DEV) console.error("Web3Forms Fetch Error:", error);
      setErrorMessage(
        error instanceof Error ? error.message : "A network error occurred."
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activeSection={activeSection} />

      <main>
        {/* Hero */}
        <section
          id="home"
          className="px-5 pb-20 pt-24 sm:px-8 sm:pb-20 lg:px-12"
        >
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1fr_auto]">
            <div>
              <p className="label-eyebrow">Surabaya, Indonesia</p>

              <h1 className="mt-4 text-[1.4rem] font-medium leading-[1.1] tracking-[-0.035em] sm:text-5xl lg:text-[4.2rem] lg:leading-[1.06] lg:tracking-[-0.03em]">
                Ahmad Suyuti Syauqi
              </h1>

              <div className="mt-4">
                <TypingAnimation />
              </div>

              <p className="mt-6 max-w-xl text-[15px] leading-[1.625] text-foreground/60">
                I build and test digital products end to end — from management
                information systems to hardware-integrated mobile apps.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                <a
                  href="/CV_ATS_Ahmad_Suyuti_Syauqi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses("default", "cta")}
                >
                  <Download size={16} aria-hidden="true" />
                  Download CV
                </a>
                <a href="#portfolio" className={buttonClasses("outline", "cta")}>
                  View work
                </a>
              </div>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {SOCIALS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center gap-1 rounded-[4px] text-xs text-foreground/60 transition-all hover:text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
                    >
                      {label}
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <Frame className="mx-auto w-40 sm:w-48 md:w-56">
              <div className="overflow-hidden rounded-lg ring-1 ring-foreground/10">
                <img
                  src={myPhoto2}
                  alt="Ahmad Suyuti Syauqi"
                  width={1100}
                  height={1100}
                  fetchPriority="high"
                  sizes="(min-width: 768px) 224px, (min-width: 640px) 192px, 160px"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </Frame>
          </div>

          <dl className="mx-auto mt-16 grid max-w-5xl grid-cols-3 border-y border-border">
            {STATS.map(({ value, label }) => (
              <div key={label} className="px-4 py-4 first:pl-0">
                <dt className="label-eyebrow">{label}</dt>
                <dd className="mt-1 text-4xl font-normal tracking-[-0.025em]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <hr className="rule-dashed" />

        {/* Services */}
        <section id="services" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-container">
            <SectionHeading
              eyebrow="Services"
              title="What I build"
              lead="Web and Android development, from the data layer through to a interface someone can actually use."
            />

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {SERVICES.map(({ index, title, image, alt, description }, i) => (
                <Reveal key={title} delay={i * 90}>
                  <article className="group card-elevated h-full overflow-hidden rounded-lg bg-card ring-1 ring-foreground/10 transition-all hover:-translate-y-1 hover:ring-foreground/20">
                    <div className="overflow-hidden border-b border-border">
                      <img
                        src={image}
                        alt={alt}
                        width={900}
                        height={562}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-4 px-4 py-4">
                      <div className="flex items-baseline gap-2">
                        <span className="label-eyebrow transition-all group-hover:text-primary">
                          {index}
                        </span>
                        <h3 className="text-sm font-semibold leading-[21px] tracking-[-0.025em]">
                          {title}
                        </h3>
                      </div>
                      <p className="text-[13px] leading-[1.625] text-foreground/50">
                        {description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <hr className="rule-dashed" />

        {/* About */}
        <section id="about" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-container">
            <SectionHeading eyebrow="About" title="Background" />

            <div className="mt-12 grid gap-12 md:grid-cols-[1fr_20rem]">
              <Reveal>
                <div className="max-w-xl space-y-4 text-[15px] leading-[1.625] text-foreground/60">
                  <p>
                    I'm a Fullstack Developer, Mobile Developer, and QA
                    enthusiast working on building and evaluating robust digital
                    systems.
                  </p>
                  <p>
                    I have developed complex projects ranging from comprehensive
                    management information systems to hardware-integrated mobile
                    apps. Leveraging React, Next.js, Kotlin, and usability
                    testing (SUS), I focus on delivering high-quality solutions
                    with an intuitive user experience.
                  </p>
                  <p>
                    Passionate about AI implementation and software testing, and
                    ready to help realise your next project.
                  </p>
                </div>

                <a
                  href="/certificates.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses("outline", "cta", "mt-8")}
                >
                  <Download size={16} aria-hidden="true" />
                  Certificates
                </a>
              </Reveal>

              <Reveal delay={120}>
                <p className="label-eyebrow">Tools</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {SKILLS.map(({ logo, name }) => (
                    <li key={name}>
                      <IconProgress logo={logo} name={name} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <hr className="rule-dashed" />

        <PortfolioSection />

        <hr className="rule-dashed" />

        {/* Contact */}
        <section id="contact" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-container">
            <SectionHeading
              eyebrow="Contact"
              title="Start a project"
              lead="Tell me what you're building and I'll get back to you."
            />

            <Reveal className="mt-12">
              <form
                onSubmit={handleSubmit}
                className="max-w-xl rounded-lg bg-card px-4 py-4 ring-1 ring-foreground/10"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {/* Honeypot: hidden from users; bots that fill it are rejected. */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                  <div>
                    <label htmlFor="name" className="label-eyebrow">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      autoComplete="name"
                      className={`${FIELD} mt-1.5`}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-eyebrow">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      autoComplete="email"
                      className={`${FIELD} mt-1.5`}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label-eyebrow">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={`${FIELD} mt-1.5`}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="label-eyebrow">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className={`${FIELD} mt-1.5`}
                    >
                      <option value="">Select…</option>
                      <option value="web">Website development</option>
                      <option value="mobile">Mobile development</option>
                      <option value="design">UI/UX design</option>
                    </select>
                  </div>
                </div>

                <div className="mt-3">
                  <label htmlFor="timeline" className="label-eyebrow">
                    Timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    className={`${FIELD} mt-1.5`}
                  />
                </div>

                <div className="mt-3">
                  <label htmlFor="brief" className="label-eyebrow">
                    Brief
                  </label>
                  <textarea
                    id="brief"
                    name="brief"
                    required
                    rows={5}
                    className={`${FIELD} mt-1.5 h-auto resize-y py-2 leading-[1.625]`}
                  />
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <p aria-live="polite" className="text-xs">
                    {submitStatus === "success" && (
                      <span className="text-accent-foreground">
                        Sent — thanks, I'll be in touch.
                      </span>
                    )}
                    {submitStatus === "error" && (
                      <span className="text-destructive">
                        {errorMessage || "Failed to send. Please try again."}
                      </span>
                    )}
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={buttonClasses("default", "cta", "ml-auto")}
                  >
                    {isSubmitting ? "Sending…" : "Send message"}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <hr className="rule-dashed" />

      <footer className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-container flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <a
              href="#home"
              className="rounded-[4px] font-mono text-xs tracking-[0.16em] text-foreground"
            >
              KII.
            </a>
            <p className="mt-3 text-[13px] leading-[1.625] text-foreground/50">
              © {new Date().getFullYear()} Ahmad Suyuti Syauqi
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="rounded-[4px] text-xs text-foreground/60 transition-all hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default App;
