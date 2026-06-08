'use client';
import logoAnimation from "../../public/animations/splashScreenAnim.json";
import Lottie from 'lottie-react';

const LottieComponent = () => {


  return (
    <div className="size-72">
        <Lottie 
            animationData={logoAnimation}
            loop
            autoplay
        />
    </div>
  );
};

export default LottieComponent;