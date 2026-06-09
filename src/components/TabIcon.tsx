import Image, { StaticImageData } from "next/image";


const TabIcon = ({ icon, iconName, activeBtn }: { icon: StaticImageData; iconName: string; activeBtn: string; }) => {
    return (
        <Image
            className={`h-7 ${iconName === 'explore' ? 'w-11' : iconName === 'events' ? 'w-5' : 'w-7'} relative -left-40 filter ${activeBtn === iconName ? 'drop-shadow-[10rem_0_0_#8283b3]' : 'drop-shadow-[10rem_0_0_#615850]'}`}
            src={icon}
            alt={`${iconName} icon`}
            priority
        />
    );
};

export default TabIcon;