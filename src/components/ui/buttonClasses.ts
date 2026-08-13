type Variant = "default" | "outline" | "secondary" | "ghost";
type Size = "sm" | "cta";

/* No shadow in any variant. Buttons signal focus with a ring; inputs use
   border color alone — preserve that split. */
const BASE =
  "inline-flex items-center justify-center rounded-md border border-transparent font-medium transition-all active:translate-y-px focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const VARIANTS: Record<Variant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/80",
  outline: "border-border text-foreground hover:bg-input/50",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "text-foreground hover:bg-muted",
};

const SIZES: Record<Size, string> = {
  /* h-7 / 12px is the product's baseline control height. */
  sm: "h-7 px-3 text-xs gap-1.5",
  /* Marketing CTAs scale up to 40px / 14px / 10px 20px with an 8px gap. */
  cta: "h-10 px-5 py-2.5 text-sm gap-2",
};

export type { Variant, Size };

export const buttonClasses = (
  variant: Variant = "default",
  size: Size = "sm",
  className = ""
) => `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
