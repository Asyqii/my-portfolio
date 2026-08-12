import { useEffect, useState } from "react";
import { Github, Mail, Download, ChevronDown } from "lucide-react";
import Navbar from "./components/Navbar";
import myPhoto from "./assets/images/my_photo.webp";
import myPhoto2 from "./assets/images/my_photo2.webp";
import Linkedin from "./assets/images/linkedin.webp";
import appEyesight from "./assets/images/app.webp";
import websiteKonveksi from "./assets/images/website_konveksi.webp";
import pirateLibrary from "./assets/images/pirate_library.webp";
import figmaLogo from "./assets/images/figma.webp";
import reactLogo from "./assets/images/react_logo.webp";
import javascriptLogo from "./assets/images/js_logo.webp";
import kotlinLogo from "./assets/images/kotlin_logo.webp";
import sqlLogo from "./assets/images/sql_logo.webp";
import ProgressIcon from "./components/IconProgress";
import PortfolioSection from "./components/layout/PortfolioSection";
import Blob from "./components/Blob";
import TypingAnimation from "./components/TypingAnimation";
import Reveal from "./components/Reveal";
import SectionHeading from "./components/SectionHeading";

const SECTIONS = ["home", "services", "about", "portfolio", "contact"] as const;
type Section = (typeof SECTIONS)[number];

const SOCIALS = [
  {
    label: "Github",
    href: "https://github.com/Asyqii",
    icon: <Github size={22} aria-hidden="true" />,
  },
  {
    label: "Email",
    href: "mailto:ahmadsuyutisyauqi@gmail.com",
    icon: <Mail size={22} aria-hidden="true" />,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/ahmadsuyutisyauqi/",
    icon: (
      <img
        src={Linkedin}
        width={22}
        height={22}
        className="h-[22px] w-[22px] object-contain"
        alt=""
      />
    ),
  },
];

const STATS = [
  { value: "3+", label: "Experiences" },
  { value: "10+", label: "Projects done" },
  { value: "7+", label: "Happy Clients" },
];

const SERVICES = [
  {
    title: "An Application",
    image: appEyesight,
    alt: "Eyesight mobile app screens",
    description:
      "Attractive and user-friendly mobile applications for Android platforms, according to your business needs.",
  },
  {
    title: "Business Website",
    image: websiteKonveksi,
    alt: "Klik Konveksi business website",
    description:
      "Create a business website specifically designed to promote your products or services.",
  },
  {
    title: "Company Profile Website",
    image: pirateLibrary,
    alt: "Pirate Library company profile website",
    description:
      "Display important information about your company, including vision, mission, and services.",
  },
];

const SKILLS = [
  { logo: figmaLogo, name: "Figma" },
  { logo: reactLogo, name: "React JS" },
  { logo: "https://cdn.simpleicons.org/nextdotjs/white", name: "Next JS" },
  { logo: javascriptLogo, name: "Javascript" },
  { logo: kotlinLogo, name: "Kotlin" },
  { logo: sqlLogo, name: "SQL" },
  { logo: "https://cdn.simpleicons.org/supabase/3ECF8E", name: "Supabase" },
];

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact me", href: "#contact" },
];

const SOCIAL_RING =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-dark-elevated text-gray-300 transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-white hover:shadow-lg hover:shadow-primary/25";

const FIELD =
  "w-full rounded-md border border-white/10 bg-dark p-3 text-white placeholder:text-gray-500 transition-colors focus:border-primary focus:outline-none";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Track the most-visible section to drive the navbar highlight. Reads are
  // batched into a single rAF so a scroll burst does not thrash layout.
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

      setActiveSection((previous) => (previous === current ? previous : current));
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
        console.error("Web3Forms Error Data:", data);
        setErrorMessage(data.message || "Failed to send your message.");
        setSubmitStatus("error");
      }
    } catch (error: unknown) {
      console.error("Web3Forms Fetch Error:", error);
      setErrorMessage(
        error instanceof Error ? error.message : "A network error occurred."
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar activeSection={activeSection} />

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative overflow-hidden px-4 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40"
        >
          <div className="mx-auto grid max-w-content items-center gap-14 md:grid-cols-2 md:gap-16">
            <Blob />

            <div className="relative z-10 animate-fade-in-up">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
                Hi ! I am
              </p>
              <h1 className="mb-4 inline-block bg-gradient-to-r from-white to-muted bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
                Ahmad Suyuti Syauqi
              </h1>
              <TypingAnimation />

              <p className="mt-6 max-w-md leading-relaxed text-gray-400">
                I build and test digital products end to end — from management
                information systems to hardware-integrated mobile apps.
              </p>

              <ul className="mt-8 flex gap-4">
                {SOCIALS.map(({ label, href, icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={SOCIAL_RING}
                      aria-label={label}
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent px-6 py-3 font-medium transition duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/25"
                  href="/CV_ATS_Ahmad_Suyuti_Syauqi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={18} aria-hidden="true" />
                  Download CV
                </a>
                <a
                  className="inline-flex items-center rounded-md border border-white/10 bg-dark-card px-6 py-3 font-medium transition duration-300 hover:border-primary/50 hover:bg-dark-elevated"
                  href="#portfolio"
                >
                  Projects
                </a>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-dark-elevated">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="px-4 py-5 text-center sm:px-6">
                    <dt className="sr-only">{label}</dt>
                    <dd>
                      <span className="block text-2xl font-bold text-primary">
                        {value}
                      </span>
                      <span className="mt-1 block text-xs text-gray-400 sm:text-sm">
                        {label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-sm md:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/25 to-accent/10 blur-2xl"
              />
              <div className="relative aspect-square overflow-hidden rounded-full ring-1 ring-white/10">
                <img
                  src={myPhoto2}
                  alt="Ahmad Suyuti Syauqi"
                  width={1100}
                  height={1100}
                  className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-4 py-24 md:px-8">
          <div className="mx-auto max-w-content">
            <SectionHeading
              title="Services"
              subtitle="With expertise in web and Android development, I create responsive, user-friendly products that help your business thrive in the digital world."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {SERVICES.map(({ title, image, alt, description }, index) => (
                <Reveal key={title} delay={index * 90}>
                  <article className="card-surface group h-full overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={image}
                        alt={alt}
                        width={900}
                        height={562}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-bold">{title}</h3>
                      <p className="text-sm leading-relaxed text-gray-400">
                        {description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-y border-white/5 bg-dark-card px-4 py-24 md:px-8"
        >
          <div className="mx-auto max-w-content">
            <SectionHeading
              title="About Me"
              subtitle="Front-End Developer, Android Developer, and UI/UX Designer"
            />

            <div className="grid items-start gap-12 md:grid-cols-2">
              <Reveal>
                <div className="aspect-square overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <img
                    src={myPhoto}
                    alt="Ahmad Suyuti Syauqi"
                    width={1100}
                    height={1100}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="space-y-5 leading-relaxed text-gray-400">
                  <p>
                    Hello! I'm Ahmad Suyuti Syauqi, a Fullstack Developer,
                    Mobile Developer, and QA Enthusiast dedicated to building
                    and evaluating robust digital systems.
                  </p>
                  <p>
                    I have developed complex projects ranging from comprehensive
                    management information systems to hardware-integrated mobile
                    apps. Leveraging my expertise in React JS, Next JS, Kotlin,
                    and usability testing (SUS), I focus on delivering
                    high-quality, bug-free solutions with an intuitive user
                    experience.
                  </p>
                  <p>
                    Passionate about AI implementation and software testing, I
                    am ready to help realize and optimize your digital vision.
                    Feel free to contact me for your next project!
                  </p>
                </div>

                <a
                  href="/certificates.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-accent px-6 py-3 font-medium transition duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/25"
                >
                  <Download size={18} aria-hidden="true" />
                  My Certificate
                </a>

                <h3 className="mt-12 text-sm uppercase tracking-[0.2em] text-gray-500">
                  Tools &amp; technologies
                </h3>
                <ul className="mt-6 flex flex-wrap gap-6">
                  {SKILLS.map(({ logo, name }) => (
                    <li key={name}>
                      <ProgressIcon logo={logo} name={name} />
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <PortfolioSection />

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-white/5 bg-dark-card px-4 py-24 md:px-8"
        >
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Contact me"
              subtitle="Cultivating connections — reach out and let's build something together."
            />

            <Reveal>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      type="text"
                      autoComplete="name"
                      placeholder="Name"
                      className={FIELD}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      autoComplete="email"
                      placeholder="Email"
                      className={FIELD}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Phone Number"
                    className={FIELD}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="service" className="sr-only">
                    Service of interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className={`${FIELD} appearance-none pr-10`}
                  >
                    <option value="">Service Of Interest</option>
                    <option value="web">Website Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="design">UI/UX Design</option>
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="sr-only">
                    Timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    placeholder="Timeline"
                    className={FIELD}
                  />
                </div>

                <div>
                  <label htmlFor="brief" className="sr-only">
                    Project brief
                  </label>
                  <textarea
                    id="brief"
                    name="brief"
                    required
                    placeholder="Project Brief..."
                    rows={6}
                    className={`${FIELD} resize-y`}
                  />
                </div>

                <div className="flex flex-col items-stretch gap-4 sm:flex-row-reverse sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-md bg-gradient-to-r from-primary to-accent px-8 py-3 font-medium transition duration-300 hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-none"
                  >
                    {isSubmitting ? "Sending…" : "Send"}
                  </button>

                  <p aria-live="polite" className="text-sm">
                    {submitStatus === "success" && (
                      <span className="text-green-400">
                        Thanks! Your message has been sent.
                      </span>
                    )}
                    {submitStatus === "error" && (
                      <span className="text-red-400">
                        {errorMessage ||
                          "Failed to send your message. Please try again."}
                      </span>
                    )}
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-4 py-14 text-center md:px-8">
        <div className="mx-auto max-w-content">
          <a
            href="#home"
            className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-bold text-transparent"
          >
            Kii.
          </a>

          <nav aria-label="Footer" className="mt-8">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="mt-8 flex justify-center gap-4">
            {SOCIALS.map(({ label, href, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className={SOCIAL_RING}
                  aria-label={label}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-gray-500">
            © {new Date().getFullYear()} Ahmad Suyuti Syauqi. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
