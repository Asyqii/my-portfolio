import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: ReactNode;
  /** Constrain the subtitle so lines stay readable. */
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) => (
  <Reveal className={`mb-14 text-center ${className}`}>
    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    <span
      aria-hidden="true"
      className="mx-auto mt-4 block h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent"
    />
    {subtitle && (
      <p className="mx-auto mt-5 max-w-2xl text-balance leading-relaxed text-gray-400">
        {subtitle}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
