import React, { Dispatch, SetStateAction } from 'react'
import exploreIcon from "../../public/icons/exploreNew.png";
import eventsIcon from "../../public/icons/eventsIcon.png";
import rescueIcon from "../../public/icons/rescueIcon.png";
import connectIcon from "../../public/icons/connectIcon.png";
import profileIcon from "../../public/icons/profileIcon.png";
import likesIcon from "../../public/icons/likesIcon.png";
import TabIcon from './TabIcon';

const iconList = [
    {
        id: 0,
        icon: profileIcon,
        iconName: 'profile'
    },
    {
        id: 1,
        icon: likesIcon,
        iconName: 'likes'
    },
    {
        id: 2,
        icon: exploreIcon,
        iconName: 'explore'
    },
    {
        id: 3,
        icon: eventsIcon,
        iconName: 'events'
    },
    {
        id: 4,
        icon: connectIcon,
        iconName: 'connect'
    },
    {
        id: 5,
        icon: rescueIcon,
        iconName: 'rescue'
    }
];

const TabBar = ({ activeBtn, isDeckRendered, setActiveIndex }: 
    { 
        activeBtn: string; 
        isDeckRendered: boolean; 
        setActiveIndex: Dispatch<SetStateAction<number>>; 
    }) => {

  return (
    <div className='flex gap-2.5 items-center justify-center'>
    {iconList.map((icon, i) => (
        <button
            key={icon.iconName} 
            className={`flex flex-col items-center justify-center overflow-hidden gap-0.5 transition-opacity ease-in duration-300 ${!isDeckRendered ? 'opacity-0' : 'opacity-100'} cursor-pointer`}
            onClick={() => setActiveIndex(icon.id)}
            style={{
                transitionDelay: isDeckRendered ? `${i * 120}ms` : '0ms',
            }}
        >
            <TabIcon
                icon={icon.icon}
                iconName={icon.iconName}
                activeBtn={activeBtn}
            />
            <span className={`text-[clamp(10px,0.85vw,12px)] ${activeBtn === icon.iconName ? 'text-foreground' : 'text-tabFont'}`}>{icon.iconName}</span>
        </button>
    ))}
    </div>
  );
};

export default TabBar;