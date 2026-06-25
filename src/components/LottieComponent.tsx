'use client';
import noBgAnim from "../../public/animations/noBgAnim.json";
import Lottie from 'lottie-react';

const LottieComponent = () => {


  return (
    <div className="size-[65%] 2xl:size-[150%]">
        <Lottie 
          animationData={noBgAnim}
          loop
          autoplay
        />
    </div>
  );
};

export default LottieComponent;