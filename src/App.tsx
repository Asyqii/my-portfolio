import { useEffect, useState } from "react";
import { Instagram, Github, Mail, Download, ChevronDown } from "lucide-react";
import Navbar from "./components/Navbar";
import myPhoto from "./../public/assets/images/my_photo.jpg";
import Linkedin from "./../public/assets/images/linkedin.png";
import appEyesight from "./../public/assets/images/app.webp";
import websiteKonveksi from "./../public/assets/images/website_konveksi.webp";
import pirateLibrary from "./../public/assets/images/pirate_library.webp";
import figmaLogo from "./../public/assets/images/figma.png";
import reactLogo from "./../public/assets/images/react_logo.png";
import javascriptLogo from "./../public/assets/images/js_logo.png";
import kotlinLogo from "./../public/assets/images/kotlin_logo.png";
import sqlLogo from "./../public/assets/images/sql_logo.png";
import ProgressIcon from "./components/IconProgress";
import PortftolioSection from "./components/layout/PortfolioSection";
import Blob from "./components/Blob";
import TypingAnimation from "./components/TypingAnimation";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    "home" | "services" | "about" | "portfolio" | "contact"
  >("home");

  const handleScroll = () => {
    const sections = [
      "home",
      "services",
      "about",
      "portfolio",
      "contact",
    ] as const;
    let currentSection: (typeof sections)[number] = "home";

    let maxVisibleHeight = -1;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const visibleHeight =
          Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          currentSection = section;
        }
      }
    });

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logosProgress = [
    { logo: figmaLogo, percentage: 100, name: "Figma" },
    { logo: reactLogo, percentage: 80, name: "React JS" },
    { logo: javascriptLogo, percentage: 80, name: "Javascript" },
    { logo: kotlinLogo, percentage: 80, name: "Kotlin" },
    { logo: sqlLogo, percentage: 50, name: "SQL" },
  ];

  


  const handleSubmit = async () => {
    alert('This Features is Coming Soon !')
    
  };

  return (
    <>
      <div className="min-h-screen bg-[#111111] text-white">
        <Navbar activeSection={activeSection} />

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Blob />
              <div className="z-10">
                <p className="text-gray-400 mb-2">Hi ! I am</p>
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#959595] hover:bg-gradient-to-r hover:from-primary hover:to-[#E60026] hover:bg-clip-text hover:text-transparent ease-linear duration-300 inline-block">
                  Ahmad Suyuti Syauqi
                </h1>
                <TypingAnimation />

                <div className="flex space-x-6 mb-8 mt-6">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-full border border-[#575757] bg-[#231E1B] p-2 hover:shadow-lg hover:shadow-primary hover:border-primary hover:scale-105 duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://github.com/Asyqii"
                    target="_blank"
                    className="flex items-center justify-center rounded-full border border-[#575757] bg-[#231E1B] p-2 hover:shadow-lg hover:shadow-primary hover:border-primary hover:scale-105 duration-300"
                    aria-label="Github"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSDbSMsWdJHjzjStrkrmKGbKJCwrJXxssdGzqfsbmCVsWswbJBLCbpRFQjJPtHpBdsXpVkFC"
                    target="_blank"
                    className="flex items-center justify-center rounded-full border border-[#575757] bg-[#231E1B] p-2 hover:shadow-lg hover:shadow-primary hover:border-primary hover:scale-105 duration-300"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmadsuyutisyauqi/"
                    target="_blank"
                    className="flex items-center justify-center rounded-full border border-[#575757] bg-[#231E1B] p-2 grayscale hover:grayscale-0 hover:shadow-lg hover:shadow-primary hover:border-primary hover:scale-105 duration-300"
                    aria-label="Linkedin"
                  >
                    <img
                      src={Linkedin}
                      className="w-6 object-cover"
                      alt="Linkedin Logo"
                    ></img>
                  </a>
                </div>

                <div className="flex space-x-4">
                  <a
                    className="bg-primary px-6 py-3 rounded-md flex items-center gap-2 transition-all hover:shadow-md duration-300 ease-in-out hover:from-[#FA6E00] hover:to-[#D1001A] hover:scale-105 hover:shadow-slate-400"
                    href="./../../public/CV_ATS_Ahmad_Suyuti_Syauqi.pdf"
                    target="_blank"
                  >
                    <Download size={20} />
                    Download CV
                  </a>
                  <a
                    className="bg-[#1A1A1A] px-6 py-3 rounded-md hover:scale-105 hover:shadow-md hover:shadow-primary ease-in-out duration-300"
                    href="#portfolio"
                  >
                    Projects
                  </a>
                </div>

                <div className="flex gap-4 md:gap-8 mt-12 bg-[#212121] pl-8 pr-16 py-5 rounded-lg md:w-[30rem]">
                  <div className="md:mr-2">
                    <p className="text-2xl font-bold text-primary">3+</p>
                    <p className="text-gray-400">Experiences</p>
                  </div>
                  <div className="border-l border-gray-500 pl-2 md:pl-7 md:-ml-6">
                    {" "}
                    {/* Garis pemisah di sini */}
                    <p className="text-2xl font-bold text-primary rounded-md">
                      10+
                    </p>
                    <p className="text-gray-400">Projects done</p>
                  </div>
                  <div className="border-l border-gray-500 pl-2 md:pl-6">
                    {" "}
                    {/* Garis pemisah di sini */}
                    <p className="text-2xl font-bold text-primary">7+</p>
                    <p className="text-gray-400">Happy Clients</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-full overflow-hidden">
                  <img
                    src={myPhoto}
                    alt="Profile"
                    className="w-full h-full object-cover filter grayscale transition duration-300 hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">Services</h2>
            <p className="text-gray-400 text-center mb-12">
              With expertise in web development and android development, I
              create responsive and user-friendly sites, allowing your business
              to thrive in the digital world.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary/60 to-[#1A1A1A] via-[#1A1A1A] bg-opacity-20 p-6 rounded-lg border-2 border-transparent transition transform hover:scale-105 hover:shadow-inner-custom hover:shadow-primary hover:border-2 hover:border-primary ease-in-out duration-300">
                <div className="bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <img
                    src={appEyesight}
                    alt="application"
                    className="rounded-md h-44 w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">An Application</h3>
                <p className="text-gray-400">
                  Attractive and user-friendly mobile applications for Android
                  platforms, according to your business needs.
                </p>
              </div>

              <div className="bg-gradient-to-b from-primary/60 to-[#1A1A1A] via-[#1A1A1A] bg-opacity-20 bg-[#1A1A1A] p-6 rounded-lg border-2 border-transparent transition transform hover:scale-105 hover:shadow-inner-custom hover:shadow-primary hover:border-2 hover:border-primary ease-in-out duration-300">
                <div className="bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <img
                    src={websiteKonveksi}
                    alt="Bussiness Website"
                    className="rounded-md h-44 w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Bussiness Website</h3>
                <p className="text-gray-400">
                  Create a business website specifically designed to promote
                  your products or services.
                </p>
              </div>

              <div className="bg-gradient-to-bl from-primary/60 to-[#1A1A1A] via-[#1A1A1A] bg-opacity-20 bg-[#1A1A1A] p-6 rounded-lg border-2 border-transparent transition transform hover:scale-105 hover:shadow-inner-custom hover:shadow-primary hover:border-primary ease-in-out duration-300">
                <div className=" bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <img
                    src={pirateLibrary}
                    alt="Bussiness Website"
                    className="rounded-md h-44 w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Company Profile Website
                </h3>
                <p className="text-gray-400">
                  Display important information about your company, including
                  vision, mission, and services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2 text-[#FEFEFE]">
              About Me
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Front-End Developer, Android Developer And Also UI/UX Designer
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={myPhoto}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="text-gray-400 mb-8">
                  Hello! I'm Ahmad Suyuti Syauqi, a Front-End and Mobile
                  Developer with experience in creating engaging and functional
                  apps and websites. I strongly believe in the importance of
                  responsive design and good user experience. I have worked with
                  various projects, ranging from creating company profiles to
                  business websites, and always try to provide the right
                  solution to meet my clients' needs. With skills in React JS
                  and Kotlin, I am ready to help you realize your digital
                  vision. Outside of work, I love exploring the latest trends in
                  technology and design, and innovating to create better
                  experiences for users. Feel free to contact me if you need
                  help with your project!
                </p>

                <a href="../public/certificates.pdf" target="_blank">
                  <button className="bg-gradient-to-r from-primary to-[#E60026] px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 ease-in-out hover:from-[#FA6E00] hover:to-[#D1001A] hover:scale-105 hover:shadow-md">
                    <Download size={20} />
                    My Certificate
                  </button>
                </a>

                <div className="flex flex-wrap gap-8 mt-12">
                  {logosProgress.map((item, index) => (
                    <ProgressIcon
                      key={index}
                      percentage={item.percentage}
                      logo={item.logo}
                      name={item.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <PortftolioSection />

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 md:px-8 bg-[#1A1A1A]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">Contact me</h2>
            <p className="text-gray-400 text-center mb-12">
              Cultivating Connections: Reach Out And Connect With Me
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-md bg-[#111111] border border-gray-800 focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md bg-[#111111] border border-gray-800 focus:outline-none focus:border-primary"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-md bg-[#111111] border border-gray-800 focus:outline-none focus:border-primary"
              />
              <div className="relative">
                <select
                  className="w-full p-3 rounded-md bg-[#111111] border border-gray-800 focus:outline-none focus:border-primary appearance-none"
                >
                  <option value="">Service Of Interest</option>
                  <option value="web">Website Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="design">UI/UX Design</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
              <input
                type="text"
                placeholder="Timeline"
                className="w-full p-3 rounded-md bg-[#111111] border border-gray-800 focus:outline-none focus:border-primary"
              />
              <textarea
                placeholder="Project Brief..."
                rows={6}
                className="w-full p-3 rounded-md bg-[#111111] border border-gray-800 focus:outline-none focus:border-primary"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 text-center">
          <a
            href="#"
            className="text-2xl font-bold text-primary mb-8 inline-block"
            aria-label="Kii."
          >
            Kii.
          </a>
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Home"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Services"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="About"
            >
              About me
            </a>
            <a
              href="#portfolio"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Portfolio"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Contact"
            >
              Contact me
            </a>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://github.com/Asyqii"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:ahmadsuyutisyauqi@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
