import { useState } from "react";
import klikKonveksi from "./../../../public/assets/images/website_konveksi.webp";
import cancerApp from "./../../../public/assets/images/cancer_app.webp";
import storyApp from "./../../../public/assets/images/story_app.webp";
import dicodingEvent from "./../../../public/assets/images/dicoding_event_app.webp";
import eyesightApp from "./../../../public/assets/images/eyesight_app.webp";
import pirateLibrary from "./../../../public/assets/images/pirate_library.webp";
import animeLens from "./../../../public/assets/images/animelens_mockups.webp";
// import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bigData from './../../../public/assets/images/bigdata.webp';
import ngemusik from './../../../public/assets/images/ngemusik.png';

const PortftolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Klik Konveksi",
      type: "Bussiness Website",
      image: klikKonveksi,
      link: "https://react-klik-konveksi.vercel.app/",
      category: "Website Design",
    },
    {
      title: "Asclepius: Cancer Detection App",
      type: "Application",
      image: cancerApp,
      link: "https://github.com/Asyqii/cancer-detection-app",
      category: "App Mobile Design",
    },
    {
      title: "Story App",
      type: "Application",
      image: storyApp,
      link: "https://github.com/Asyqii/story-app",
      category: "App Mobile Design",
    },
    {
      title: "Dicoding Event",
      type: "Application",
      image: dicodingEvent,
      link: "https://github.com/Asyqii/dicoding-event-app",
      category: "App Mobile Design",
    },
    {
      title: "Pirate Library",
      type: "Company Website",
      image: pirateLibrary,
      link: "/#",
      category: "Website Design",
    },
    {
      title: "Eyesight",
      type: "Application",
      image: eyesightApp,
      link: "https://github.com/Eyesight-team/eyesight-app",
      category: "App Mobile Design",
    },
    {
      title: "AnimeLens.",
      type: "Application",
      image: animeLens,
      link: "https://github.com/Asyqii/anime-app",
      category: "App Mobile Design",
    },
    {
      title: "Big Data Partnership",
      type: "Company Website",
      image: bigData,
      link: "https://bigdatapartnership.id/",
      category: "Website Design",
    },
    {
      title: "Ngemusik",
      type: "Company Website",
      image: ngemusik,
      link: "https://www.ruangemusik.com/",
      category: "Website Design",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section id="portfolio" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>

        
          <div className="flex justify-center space-x-4 mb-12">
            {["All", "Website Design", "App Mobile Design"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedCategory === category
                    ? "bg-[#FF4D00] text-white"
                    : "bg-[#1A1A1A] text-gray-400 hover:bg-[#FF4D00]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-lg overflow-hidden group"
              >
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#FF4D00]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      className="px-6 py-3 bg-white text-[#FF4D00] rounded-md"
                      onClick={() => window.open(project.link, "")}
                    >
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.type}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-4 py-2 bg-[#1A1A1A] text-gray-400 rounded-md hover:bg-[#FF4D00]/10"
            >
              {showAll ? (
                <>
                Show Less
                </>
              ) : (
                <> 
                Show More
                </>
              )}
            </button>
          </div>
      </div>
    </section>
  );
};

export default PortftolioSection;
