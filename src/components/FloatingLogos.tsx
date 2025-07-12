import React from 'react';

const LinuxLogo = () => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-24 md:h-24 opacity-20 absolute animate-float" style={{ animationDuration: '4s' }}>
    <path d="M64 0C28.653 0 0 28.653 0 64s28.653 64 64 64 64-28.653 64-64S99.347 0 64 0z" fill="#FBC02D"/>
    <path d="M64 12.8c-28.277 0-51.2 22.923-51.2 51.2S35.723 115.2 64 115.2s51.2-22.923 51.2-51.2S92.277 12.8 64 12.8z" fill="#FFEB3B"/>
    <path d="M64 25.6c-21.19 0-38.4 17.21-38.4 38.4S42.81 102.4 64 102.4s38.4-17.21 38.4-38.4S85.19 25.6 64 25.6z" fill="#FBC02D"/>
    <path d="M64 38.4c-14.127 0-25.6 11.473-25.6 25.6S49.873 89.6 64 89.6s25.6-11.473 25.6-25.6S78.127 38.4 64 38.4z" fill="#FFEB3B"/>
    <path d="M64 51.2c-7.063 0-12.8 5.737-12.8 12.8S56.937 76.8 64 76.8s12.8-5.737 12.8-12.8S71.063 51.2 64 51.2z" fill="#FBC02D"/>
    <path d="M64 64c-3.531 0-6.4 2.869-6.4 6.4s2.869 6.4 6.4 6.4 6.4-2.869 6.4-6.4-2.869-6.4-6.4-6.4z" fill="#FFEB3B"/>
    <path d="M64 64c-1.766 0-3.2 1.434-3.2 3.2s1.434 3.2 3.2 3.2 3.2-1.434 3.2-3.2-1.434-3.2-3.2-3.2z" fill="#FBC02D"/>
    <path d="M64 64c-0.883 0-1.6 0.717-1.6 1.6s0.717 1.6 1.6 1.6 1.6-0.717 1.6-1.6-0.717-1.6-1.6-1.6z" fill="#FFEB3B"/>
    <path d="M64 64c-0.441 0-0.8 0.359-0.8 0.8s0.359 0.8 0.8 0.8 0.8-0.359 0.8-0.8-0.359-0.8-0.8-0.8z" fill="#FBC02D"/>
  </svg>
);

const UbuntuLogo = () => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 md:w-24 md:h-24 opacity-20 absolute animate-float" style={{ animationDuration: '5s' }}>
    <path d="M64 0C28.653 0 0 28.653 0 64s28.653 64 64 64 64-28.653 64-64S99.347 0 64 0z" fill="#E95420"/>
    <path d="M64 12.8c-28.277 0-51.2 22.923-51.2 51.2S35.723 115.2 64 115.2s51.2-22.923 51.2-51.2S92.277 12.8 64 12.8z" fill="#FCF6F5"/>
    <path d="M64 25.6c-21.19 0-38.4 17.21-38.4 38.4S42.81 102.4 64 102.4s38.4-17.21 38.4-38.4S85.19 25.6 64 25.6z" fill="#E95420"/>
    <path d="M64 38.4c-14.127 0-25.6 11.473-25.6 25.6S49.873 89.6 64 89.6s25.6-11.473 25.6-25.6S78.127 38.4 64 38.4z" fill="#FCF6F5"/>
    <path d="M64 51.2c-7.063 0-12.8 5.737-12.8 12.8S56.937 76.8 64 76.8s12.8-5.737 12.8-12.8S71.063 51.2 64 51.2z" fill="#E95420"/>
    <path d="M64 64c-3.531 0-6.4 2.869-6.4 6.4s2.869 6.4 6.4 6.4 6.4-2.869 6.4-6.4-2.869-6.4-6.4-6.4z" fill="#FCF6F5"/>
    <path d="M64 64c-1.766 0-3.2 1.434-3.2 3.2s1.434 3.2 3.2 3.2 3.2-1.434 3.2-3.2-1.434-3.2-3.2-3.2z" fill="#E95420"/>
    <path d="M64 64c-0.883 0-1.6 0.717-1.6 1.6s0.717 1.6 1.6 1.6 1.6-0.717 1.6-1.6-0.717-1.6-1.6-1.6z" fill="#FCF6F5"/>
    <path d="M64 64c-0.441 0-0.8 0.359-0.8 0.8s0.359 0.8 0.8 0.8 0.8-0.359 0.8-0.8-0.359-0.8-0.8-0.8z" fill="#E95420"/>
  </svg>
);

const FloatingLogos = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-1/4 -translate-x-1/2">
        <LinuxLogo />
      </div>
      <div className="absolute bottom-20 right-1/4 translate-x-1/2">
        <UbuntuLogo />
      </div>
      <div className="absolute top-1/2 left-10 -translate-y-1/2">
        <UbuntuLogo />
      </div>
      <div className="absolute bottom-10 left-1/3 -translate-x-1/2" style={{ animationDuration: '4.5s' }}>
        <LinuxLogo />
      </div>
      <div className="absolute top-20 right-10" style={{ animationDuration: '3.5s' }}>
        <UbuntuLogo />
      </div>
    </div>
  );
};

export default FloatingLogos;