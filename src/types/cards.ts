import { StaticImageData } from "next/image";
import { Dispatch, JSX, SetStateAction } from "react";

export interface card {
    id: number;
    children: JSX.Element;
    name: string;
    imageSrc: StaticImageData
}

export interface CardDeckProps {
    cards: card[];
    onComplete: () => void;
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<number>>;
    isIntroDone: boolean;
    setIsIntroDone: Dispatch<SetStateAction<boolean>>;
};
