'use client';
import { Dispatch, SetStateAction, useState } from "react";
import CardDeck from "./CardDeck";
import TabBar from "./TabBar";
import mlmp from '../../public/images/mlmp.jpg';
import profileTypes from '../../public/images/profileTypes.jpg';
import exploreDesc from '../../public/images/exploreDesc.jpg';
import connectDesc from '../../public/images/connectDesc.jpg';
import eventsDesc from '../../public/images/eventsDesc.jpg';
import rescueDesc from '../../public/images/rescueDesc.jpg';

const cards = [
    {
        id: 0,
        children: <p>profile</p>,
        name: 'profile',
        imageSrc: mlmp,
    },
    {
        id: 1,
        children: <p>likes</p>,
        name: 'likes',
        imageSrc: profileTypes,
    },
    {
        id: 2,
        children: <p>explore</p>,
        name: 'explore',
        imageSrc: exploreDesc
    },
    {
        id: 3,
        children: <p>events</p>,
        name: 'events',
        imageSrc: eventsDesc
    },
    {
        id: 4,
        children: <p>connect</p>,
        name: 'connect',
        imageSrc: connectDesc
    },
    {
        id: 5,
        children: <p>rescue</p>,
        name: 'rescue',
        imageSrc: rescueDesc
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
            
            <div className="absolute inset-x-0 bottom-[-18.5%] z-10 h-[clamp(4vw,50vw,120px)] flex items-center justify-center pt-4 lg:pt-0">
                <TabBar 
                    activeBtn={activeBtn}
                    isDeckRendered={isDeckRendered}
                    setActiveIndex={setActiveIndex}
                />
            </div>

        </div>


    </section>
  );
};

export default Herosection;