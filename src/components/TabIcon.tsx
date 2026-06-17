import Image, { StaticImageData } from "next/image";


const TabIcon = ({ icon, iconName, activeBtn }: { icon: StaticImageData; iconName: string; activeBtn: string; }) => {
    return (
        <Image
            className={`h-[clamp(25px,2.8vw,33px)] w-[clamp(25px,2.8vw,33px)] object-contain`}
            src={icon}
            alt={`${iconName} icon`}
            priority
            style={
                { 
                    filter: activeBtn === iconName 
                        ? 'grayscale(100%) invert(72%) sepia(3%) saturate(5400%) hue-rotate(201deg) brightness(74%) contrast(84%)' 
                        : 'grayscale(100%) invert(32%) sepia(2%) saturate(3990%) hue-rotate(347deg) brightness(89%) contrast(70%)'
                }
            }

        />
    );
};

export default TabIcon;