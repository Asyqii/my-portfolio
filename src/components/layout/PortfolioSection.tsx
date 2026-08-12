import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import klikKonveksi from "./../../assets/images/website_konveksi.webp";
import cancerApp from "./../../assets/images/cancer_app.webp";
import storyApp from "./../../assets/images/story_app.webp";
import dicodingEvent from "./../../assets/images/dicoding_event_app.webp";
import eyesightApp from "./../../assets/images/eyesight_app.webp";
import pirateLibrary from "./../../assets/images/pirate_library.webp";
import animeLens from "./../../assets/images/animelens_mockups.webp";
import bigData from "./../../assets/images/bigdata.webp";
import ngemusik from "./../../assets/images/ngemusik.webp";
import ukmcUnitomo from "./../../assets/images/ukmc_unitomo.webp";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const CATEGORIES = ["All", "Website Design", "App Mobile Design"] as const;

const PROJECTS = [
  {
    title: "Klik Konveksi",
    type: "Business Website",
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
    link: "",
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
    title: "UKM Center UNITOMO",
    type: "Company Website",
    image: ukmcUnitomo,
    link: "https://ukmc-unitomo.vercel.app/",
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

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = PROJECTS.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );
  const displayed = showAll ? filtered : filtered.slice(0, 3);
  const hasMore = filtered.length > 3;

  return (
    <section id="portfolio" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-content">
        <SectionHeading
          title="Portfolio"
          subtitle="A selection of websites and mobile apps I have designed and shipped."
        />

        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAll(false);
                }}
                className={`rounded-md px-4 py-2 text-sm font-medium transition duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20"
                    : "border border-white/10 bg-dark-card text-gray-400 hover:border-primary/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayed.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 90}>
              <article className="card-surface group h-full overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={900}
                    height={506}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-bold leading-snug">{project.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{project.type}</p>
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                      className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 text-gray-400 transition duration-300 hover:border-primary hover:bg-primary hover:text-white"
                    >
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="mt-1 shrink-0 rounded-md border border-white/10 px-2 py-1 text-xs text-gray-500">
                      Private
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-md border border-white/10 bg-dark-card px-6 py-3 text-sm font-medium text-gray-300 transition duration-300 hover:border-primary/50 hover:text-white"
            >
              {showAll ? "Show Less" : `Show All (${filtered.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
