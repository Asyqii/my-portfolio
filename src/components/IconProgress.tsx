interface IconProgressProps {
  logo: string;
  name: string;
}

/**
 * A tool chip. Separation is a hairline and a radius step, never a shadow;
 * hover resolves the label to full-opacity foreground.
 */
const IconProgress: React.FC<IconProgressProps> = ({ logo, name }) => (
  <div className="group flex items-center gap-2 rounded-md border border-border bg-card px-2.5 py-1.5 transition-all hover:border-input">
    <img
      src={logo}
      alt=""
      width={14}
      height={14}
      loading="lazy"
      decoding="async"
      className="h-3.5 w-3.5 object-contain opacity-60 transition-all group-hover:opacity-100"
    />
    <span className="text-xs text-foreground/60 transition-all group-hover:text-foreground">
      {name}
    </span>
  </div>
);

export default IconProgress;
