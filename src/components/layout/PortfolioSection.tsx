import { Image, PlayCircle } from "lucide-react";
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
import SectionHeading from "../SectionHeading";

interface Project {
  title: string;
  kind: "Web" | "Mobile";
  image: string;
  link: string;
}

/* Row one travels left, row two travels right. Splitting the list keeps each
   strip short enough that the loop seam never lands mid-viewport. */
const ROW_ONE: Project[] = [
  {
    title: "Klik Konveksi",
    kind: "Web",
    image: klikKonveksi,
    link: "https://react-klik-konveksi.vercel.app/",
  },
  {
    title: "Asclepius",
    kind: "Mobile",
    image: cancerApp,
    link: "https://github.com/Asyqii/cancer-detection-app",
  },
  {
    title: "Big Data Partnership",
    kind: "Web",
    image: bigData,
    link: "https://bigdatapartnership.id/",
  },
  {
    title: "Story App",
    kind: "Mobile",
    image: storyApp,
    link: "https://github.com/Asyqii/story-app",
  },
  {
    title: "UKM Center UNITOMO",
    kind: "Web",
    image: ukmcUnitomo,
    link: "https://ukmc-unitomo.vercel.app/",
  },
];

const ROW_TWO: Project[] = [
  {
    title: "Ngemusik",
    kind: "Web",
    image: ngemusik,
    link: "https://www.ruangemusik.com/",
  },
  {
    title: "Eyesight",
    kind: "Mobile",
    image: eyesightApp,
    link: "https://github.com/Eyesight-team/eyesight-app",
  },
  {
    title: "Pirate Library",
    kind: "Web",
    image: pirateLibrary,
    link: "",
  },
  {
    title: "AnimeLens",
    kind: "Mobile",
    image: animeLens,
    link: "https://github.com/Asyqii/anime-app",
  },
  {
    title: "Dicoding Event",
    kind: "Mobile",
    image: dicodingEvent,
    link: "https://github.com/Asyqii/dicoding-event-app",
  },
];

/**
 * One work card: framed preview above, caption bar below. The caption carries a
 * type glyph on the left and the mono kind label on the right — the label is the
 * only uppercase text here, per the eyebrow rule.
 */
const Card = ({ project }: { project: Project }) => {
  const Glyph = project.kind === "Mobile" ? PlayCircle : Image;

  const inner = (
    <>
      <div className="overflow-hidden rounded-md border-b border-border">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          width={900}
          height={506}
          loading="lazy"
          decoding="async"
          className="aspect-video w-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between gap-4 px-1 pt-3">
        <span className="flex items-center gap-2 text-[13px] leading-[1.625] text-foreground/60 transition-all group-hover:text-foreground">
          <Glyph
            size={14}
            aria-hidden="true"
            className={project.kind === "Mobile" ? "text-primary" : ""}
          />
          {project.title}
        </span>
        <span className="label-eyebrow shrink-0">
          {project.kind === "Mobile" ? "Motion" : "Still"}
        </span>
      </div>
    </>
  );

  /* Uniform width keeps the loop seam invisible; the track duplicates exactly.
     card-elevated adds the soft ambient side-shadow (see index.css). */
  const shell =
    "group card-elevated w-[19rem] shrink-0 rounded-lg border border-border bg-card p-3 ring-1 ring-foreground/10 transition-all hover:border-foreground/20 hover:ring-foreground/20 sm:w-[23rem]";

  if (!project.link) {
    return <article className={shell}>{inner}</article>;
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title}`}
      className={`${shell} block focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-none`}
    >
      {inner}
    </a>
  );
};

/**
 * A continuously scrolling strip. The list is rendered twice so translating the
 * track by -50% lands exactly on the duplicate, making the loop seamless. The
 * second copy is hidden from assistive tech.
 */
const Strip = ({
  projects,
  reverse = false,
  slow = false,
}: {
  projects: Project[];
  reverse?: boolean;
  slow?: boolean;
}) => (
  <div className="marquee">
    <div
      className={`marquee-track gap-4 ${reverse ? "marquee-track--reverse" : ""} ${
        slow ? "marquee-track--slow" : ""
      }`}
    >
      <ul className="flex shrink-0 gap-4 pr-4">
        {projects.map((project) => (
          <li key={project.title} className="flex">
            <Card project={project} />
          </li>
        ))}
      </ul>
      <ul aria-hidden="true" className="flex shrink-0 gap-4 pr-4">
        {projects.map((project) => (
          <li key={project.title} className="flex">
            <Card project={project} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const PortfolioSection = () => (
  <section id="portfolio" className="py-16 sm:py-24">
    <div className="mx-auto max-w-container px-5 sm:px-8 lg:px-12">
      <SectionHeading
        eyebrow="Work"
        title="Selected projects"
        lead="Websites and mobile apps I have designed, built, and shipped. The strip pauses when you hover it."
      />
    </div>

    {/* Full-bleed: the strips run past the container gutters by design. */}
    <div className="mt-12 flex flex-col gap-4">
      <Strip projects={ROW_ONE} />
      <Strip projects={ROW_TWO} reverse slow />
    </div>
  </section>
);

export default PortfolioSection;
