import React from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  const el = React.useRef(null);

  React.useEffect(() => {


    const options = {  
        strings: [  
          '<i>Front-End Developer</i>',   
          '<i className=`px-10`>Android Developer</i>',   
        ],  
        typeSpeed: 50,  
        backSpeed: 30, // Kecepatan saat menghapus  
        backDelay: 1000, // Delay sebelum mulai menghapus  
        loop: true, // Mengulangi animasi  
        showCursor: true, // Menampilkan kursor  
        cursorChar: '<span class="typing-cursor"></span>', // Menambahkan kursor khusus  
      };  

      
  
      const typed = new Typed(el.current, options);  

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} className="text-4xl pb-2 px-1 -ml-2 md:text-5xl font-bold bg-gradient-to-r from-[#984300] to-primary bg-clip-text text-transparent"/>
    </div>
  );
};

export default TypingAnimation;
