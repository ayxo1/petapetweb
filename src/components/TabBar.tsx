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

const TabBar = ({ activeBtn, setActiveBtn, isDeckRendered }: { activeBtn: string; setActiveBtn: Dispatch<SetStateAction<string>>; isDeckRendered: boolean; }) => {

  return (
    <div className='flex gap-3.5 items-center justify-center'>
    {iconList.map((icon, i) => (
        <button
            key={icon.iconName} 
            className={`flex flex-col items-center justify-center overflow-hidden gap-0.5 transition-opacity ease-in duration-300 ${!isDeckRendered ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => setActiveBtn(icon.iconName)}
            style={{
                transitionDelay: isDeckRendered ? `${i * 100}ms` : '0ms',
            }}
        >
            <TabIcon
                icon={icon.icon}
                iconName={icon.iconName}
                activeBtn={activeBtn}
            />
            <span className={`text-[clamp(9px,0.85vw,12px)] ${activeBtn === icon.iconName ? 'text-foreground' : 'text-tabFont'}`}>{icon.iconName}</span>
        </button>
    ))}
    </div>
  );
};

export default TabBar;