import figmaLogo from "./../assets/images/figma.webp";

interface CircularProgressProps {
    percentage?: number;
    logo: string;
    name: string;
  }
  
  const IconProgress: React.FC<CircularProgressProps> = ({
    logo,
    name,
  }) => {
    return (
      <div className="flex items-center justify-center relative group flex-col">
        <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full border-4 border-[#4A4A4A] group-hover:border-[#FF4D00] transition-colors duration-300 mb-3 bg-[#1A1A1A]">
          <img
            src={logo}
            alt="Logo"
            className={`${logo === figmaLogo ? 'w-6' : 'w-9'} max-h-9 object-contain group-hover:grayscale-0 grayscale transition duration-300`}
          />
        </div>
        <p className="text-center text-sm text-gray-400 font-bold">{name}</p>
      </div>
    );
  };

  export default IconProgress;