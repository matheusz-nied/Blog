"use client"
import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = () => {
  return (
    <div className='h-4/5 sm:h-4/5 md:h-3/5'>

      <DotLottiePlayer
        src="/astronaut.lottie"
        autoplay
        loop
        >
       
      </DotLottiePlayer>
        </div>
  );
};

export default LottieAnimation;