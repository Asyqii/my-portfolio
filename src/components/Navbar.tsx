import { FC } from "react";

interface NavbarProps {
  activeSection: "home" | "services" | "about" | "portfolio" | "contact";
}

const Navbar: FC<NavbarProps> = ({ activeSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#111111]/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent"
        >
          Kii.
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className={`hover:text-[#FF4D00] transition-colors ${
              activeSection === "home" ? "text-[#FF4D00]" : "text-gray-400"
            }`}
          >
            Home
          </a>
          <a
            href="#services"
            className={`hover:text-[#FF4D00] transition-colors ${
              activeSection === "services" ? "text-[#FF4D00]" : "text-gray-400"
            }`}
          >
            Services
          </a>
          <a
            href="#about"
            className={`hover:text-[#FF4D00] transition-colors ${
              activeSection === "about" ? "text-[#FF4D00]" : "text-gray-400"
            }`}
          >
            About me
          </a>
          <a
            href="#portfolio"
            className={`hover:text-[#FF4D00] transition-colors ${
              activeSection === "portfolio" ? "text-[#FF4D00]" : "text-gray-400"
            }`}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={`hover:text-[#FF4D00] transition-colors ${
              activeSection === "contact" ? "text-[#FF4D00]" : "text-gray-400"
            }`}
          >
            Contact me
          </a>
        </div>
        <a 
        className="cursor-pointer hidden md:block bg-gradient-to-r from-[#FF4D00] to-[#E60026] px-6 py-2 rounded-md transition-all duration-300 ease-in-out hover:from-[#FA6E00] hover:to-[#D1001A] hover:scale-105 hover:shadow-md"
        href="./.././../public/CV_ATS_Ahmad_Suyuti_Syauqi.pdf"
        target="_blank"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
