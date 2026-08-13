import type { ReactNode } from "react";

interface FrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * A framed region: hairline ring plus the plus-shaped crop marks that pin its
 * corners. Structure is drawn, not lit — no shadow, no glow.
 */
const Frame = ({ children, className = "" }: FrameProps) => (
  <div className={`crop-marks relative ${className}`}>
    {children}
    <span aria-hidden="true" className="-left-1 -top-1" />
    <span aria-hidden="true" className="-right-1 -top-1" />
    <span aria-hidden="true" className="-bottom-1 -left-1" />
    <span aria-hidden="true" className="-bottom-1 -right-1" />
  </div>
);

export default Frame;
