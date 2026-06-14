'use client';
import { useState } from "react";
import CardDeck from "./CardDeck";
import Image from "next/image";
import phoneFrame from "../../public/images/phoneFrame.png";
import phoneFrameNoBg from "../../public/images/phoneFrameNoBg.png";
import TabBar from "./TabBar";

const Herosection = () => {

    const [isDeckRendered, setIsDeckRendered] = useState(false);
    const [activeBtn, setActiveBtn] = useState('profile');

  return (
    <section className="relative isolate mx-auto aspect-2/3 w-[clamp(440px,42vw,550px)]">
        
        <Image
            className={`z-30 object-contain scale-110 pointer-events-none transition-opacity duration-300 ease-in ${!isDeckRendered ? 'opacity-0' : 'opacity-100'}`}
            src={phoneFrameNoBg}
            alt="phone frame image"
            priority
            fill
        />

        <div
            className="absolute left-[19%] top-[8%] h-[76%] w-[62%] z-20"
        >
            
            <div className="relative h-full w-full">
                <div className="absolute inset-0 top-0 z-20 h-[98%] w-full scale-95 scale-y-100">
                    <CardDeck 
                        cards={[
                            {
                                id: 0,
                                children: <p>1</p>
                            },
                            {
                                id: 1,
                                children: <p>2</p>
                            },
                            {
                                id: 2,
                                children: <p>3</p>
                            },
                            {
                                id: 3,
                                children: <p>4</p>
                            },
                        ]}
                        onComplete={() => setIsDeckRendered(true)}
                    />
                </div>
            </div>
            
            <div className="absolute inset-x-0 -bottom-25 z-30 h-[20%] flex items-center justify-center">
                <TabBar 
                    activeBtn={activeBtn}
                    setActiveBtn={setActiveBtn}
                    isDeckRendered={isDeckRendered}
                />
            </div>

        </div>


    </section>
  );
};

export default Herosection;