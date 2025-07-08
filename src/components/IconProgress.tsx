import figmaLogo from "./../../public/assets/images/figma.png";
// import reactLogo from "./../public/assets/images/react_logo.png";
// import javascriptLogo from "./../public/assets/images/js_logo.png";
// import kotlinLogo from "./../public/assets/images/kotlin_logo.png";
// import sqlLogo from "./../public/assets/images/sql_logo.png";

interface CircularProgressProps {
    percentage: number;
    logo: string;
    name: string;
  }
  
  const IconProgress: React.FC<CircularProgressProps> = ({
    percentage,
    logo,
    name,
  }) => {
    const radius = 43;
    const strokeWidth = 10;
    const normalizedRadius = radius - strokeWidth * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
    return (
      <>
        <div className="flex items-center justify-center relative group flex-col">
          <svg
            width="100"
            height="100"
            className="relative"
            viewBox="0 0 100 100"
          >
            <circle
              stroke="#4A4A4A"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx="50"
              cy="50"
            />
            <circle
              stroke="#FF4D00"
              fill="transparent"
              strokeWidth={strokeWidth}
              r={normalizedRadius}
              cx="50"
              cy="50"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
            />
          </svg>
          <img
            src={logo}
            alt="Logo"
            className={`absolute ${logo === figmaLogo ? 'w-5' : 'w-7'} top-9 left-1/35 object-cover group-hover:grayscale-0 grayscale transition duration-300`}
          />
          <span className="text-[#FF4D00] font-bold mt-2">{percentage}%</span>
          <p className="text-center text-sm text-gray-400 font-bold">{name}</p>
        </div>
      </>
    );
  };

  export default IconProgress;