'use client';
import { Dispatch, SetStateAction, useState } from "react";
import CardDeck from "./CardDeck";
import TabBar from "./TabBar";

const cards = [
    {
        id: 0,
        children: <p>profile</p>,
        name: 'profile'
    },
    {
        id: 1,
        children: <p>likes</p>,
        name: 'likes'
    },
    {
        id: 2,
        children: <p>explore</p>,
        name: 'explore'
    },
    {
        id: 3,
        children: <p>events</p>,
        name: 'events'
    },
    {
        id: 4,
        children: <p>connect</p>,
        name: 'connect'
    },
    {
        id: 5,
        children: <p>rescue</p>,
        name: 'rescue'
    },
];

const Herosection = ({ isDeckRendered, setIsDeckRendered }: { isDeckRendered: boolean; setIsDeckRendered: Dispatch<SetStateAction<boolean>> }) => {

    const [isIntroDone, setIsIntroDone] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeBtn = cards[activeIndex].name;
    
  return (
    <section className="relative isolate mx-auto aspect-2/3 w-[clamp(440px,42vw,550px)]">

        <div
            className="absolute left-[19%] top-[8%] h-[76%] w-[62%] z-20"
        >
            
            <div className="relative h-full w-full">
                <div className="absolute inset-0 top-0 z-20 h-[98%] w-full scale-95 scale-y-100">
                    <CardDeck 
                        cards={cards}
                        onComplete={() => setIsDeckRendered(true)}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        isIntroDone={isIntroDone}
                        setIsIntroDone={setIsIntroDone}
                    />
                </div>
            </div>
            
            <div className="absolute inset-x-0 -bottom-23 z-10 h-[clamp(4vw,50vw,120px)] flex items-center justify-center">
                <TabBar 
                    activeBtn={activeBtn}
                    // setActiveBtn={setActiveBtn}
                    isDeckRendered={isDeckRendered}
                    setActiveIndex={setActiveIndex}
                />
            </div>

        </div>


    </section>
  );
};

export default Herosection;