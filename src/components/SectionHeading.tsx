import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  className?: string;
}

/* Section h2: 36px / 40px, weight 400, tracking −0.025em. Lead caps at max-w-xl. */
const SectionHeading = ({
  eyebrow,
  title,
  lead,
  className = "",
}: SectionHeadingProps) => (
  <Reveal className={className}>
    <p className="label-eyebrow">{eyebrow}</p>
    <h2 className="mt-3 text-[30px] font-normal leading-9 tracking-[-0.025em] sm:text-4xl sm:leading-10">
      {title}
    </h2>
    {lead && (
      <p className="mt-4 max-w-xl text-[15px] leading-[1.625] text-foreground/60">
        {lead}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
