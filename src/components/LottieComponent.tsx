'use client';
import logoAnimation from "../../public/animations/splashScreenAnim.json";
import noBgAnim from "../../public/animations/noBgAnim.json";
import Lottie from 'lottie-react';

const LottieComponent = () => {


  return (
    <div className="size-[85%] xl:size-[75%] 2xl:size-[150%]">
        <Lottie 
            animationData={noBgAnim}
            loop
            autoplay
        />
    </div>
  );
};

export default LottieComponent;