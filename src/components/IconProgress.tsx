interface IconProgressProps {
  logo: string;
  name: string;
}

/**
 * A tool chip. Separation is a hairline and a radius step, never a shadow;
 * hover resolves the label to full-opacity foreground.
 */
const IconProgress: React.FC<IconProgressProps> = ({ logo, name }) => (
  <div className="group flex items-center gap-2.5 rounded-md border border-border bg-card px-3 py-2 transition-all hover:border-input">
    <img
      src={logo}
      alt=""
      width={18}
      height={18}
      loading="lazy"
      decoding="async"
      className="h-[18px] w-[18px] object-contain opacity-60 transition-all group-hover:opacity-100"
    />
    <span className="text-[13px] leading-[1.4] text-foreground/60 transition-all group-hover:text-foreground">
      {name}
    </span>
  </div>
);

export default IconProgress;
