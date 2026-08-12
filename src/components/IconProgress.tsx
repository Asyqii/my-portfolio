interface IconProgressProps {
  logo: string;
  name: string;
}

/**
 * A skill badge: logo in a ring that warms to the brand color on hover.
 * Logos are desaturated at rest so the row reads as one unit.
 */
const IconProgress: React.FC<IconProgressProps> = ({ logo, name }) => {
  return (
    <div className="group flex flex-col items-center">
      <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full border-2 border-white/10 bg-dark-elevated transition duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20">
        <img
          src={logo}
          alt=""
          width={36}
          height={36}
          loading="lazy"
          decoding="async"
          className="h-9 w-9 object-contain grayscale transition duration-300 group-hover:grayscale-0"
        />
      </div>
      <p className="mt-3 text-center text-sm font-medium text-gray-400 transition-colors group-hover:text-white">
        {name}
      </p>
    </div>
  );
};

export default IconProgress;
