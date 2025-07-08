import React from 'react';  

const Blob = () => {  
  return (  
    <div className="absolute flex justify-center items-center w-96 h-96 overflow-hidden filter blur-xl opacity-10 z-0 mb-20">  
    <div className="absolute inset-0 bg-orange-500 rounded-full transform rotate-12 filter blur-3xl clip-path z-0"></div>  
  </div>
  );
};

export default Blob;