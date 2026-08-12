/**
 * Decorative glow behind the hero copy. Sits in the flow's first grid cell
 * but is positioned absolutely, so it never affects layout.
 */
const Blob = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-24 top-8 z-0 h-96 w-96 opacity-20 blur-3xl"
    >
      <div className="clip-path h-full w-full rotate-12 bg-gradient-to-br from-primary to-accent" />
    </div>
  );
};

export default Blob;
