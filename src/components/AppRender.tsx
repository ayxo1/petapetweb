'use client';
import phoneFrame from "../../public/images/phoneFrame.png";
import borderCompressed from "../../public/images/borderCompressed.png";
import exploreIcon from "../../public/icons/exploreNew.png";
import eventsIcon from "../../public/icons/eventsIcon.png";
import rescueIcon from "../../public/icons/rescueIcon.png";
import connectIcon from "../../public/icons/connectIcon.png";
import profileIcon from "../../public/icons/profileIcon.png";
import likesIcon from "../../public/icons/likesIcon.png";
import Image from "next/image";
import { useState } from "react";
import TabIcon from "./TabIcon";

const iconList = [
    {
        icon: profileIcon,
        iconName: 'profile'
    },
    {
        icon: likesIcon,
        iconName: 'likes'
    },
    {
        icon: exploreIcon,
        iconName: 'explore'
    },
    {
        icon: eventsIcon,
        iconName: 'events'
    },
    {
        icon: connectIcon,
        iconName: 'connect'
    },
    {
        icon: rescueIcon,
        iconName: 'rescue'
    }
];

const AppRender = () => {

    const [activeBtn, setActiveBtn] = useState('explore');

  return (
    <div className="mt-10 flex items-center justify-center overflow-visible">
        <div className="relative">
            <Image
                className=""
                src={phoneFrame}
                alt="phone frame image"
                width={550}
                height={550}
                priority
            />

            <div className="absolute top-24 right-32.5 h-160">
                <div>
                    <Image
                        className=" h-146 w-72 shadow-2xl rounded-xl"
                        src={borderCompressed}
                        alt="profile border"
                        priority
                    />

                    <div className="absolute top-1/2">
                        <p>explore page, pls swipe</p>
                    </div>
                </div>

                <div className="flex flex-row mt-1.5 gap-3.5 px-2 items-center justify-center">
                    {iconList.map(icon => (
                        <button
                            key={icon.iconName}
                            className="flex flex-col items-center overflow-hidden gap-0.5"
                            onClick={() => setActiveBtn(icon.iconName)}
                        >
                            <TabIcon 
                                icon={icon.icon}
                                iconName={icon.iconName}
                                activeBtn={activeBtn}
                            />
                            <p className={`text-[0.6rem] ${activeBtn === icon.iconName ? 'text-foreground' : 'text-tabFont'}`}>{icon.iconName}</p>
                        </button>
                    ))}
                </div>

            </div>

        </div>
        
    </div>
  );
};

export default AppRender;