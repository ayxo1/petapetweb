'use client';
import { config, useSprings, animated } from "@react-spring/web";
import ProfileCard, { ProfileCardData } from "./ProfileCard";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import Image from "next/image";
import phoneFrameNoBg from "../../public/images/phoneFrameNoBg.png";
import { checkMobile } from "@/app/utils/handleMobile";


type CardDeckProps = {
    cards: ProfileCardData[];
    onComplete: () => void;
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<number>>;
    isIntroDone: boolean;
    setIsIntroDone: Dispatch<SetStateAction<boolean>>;
};

const stableRotation = (seed: number) => {
  const x = Math.sin(seed * 999) * 10000;
  return -8 + (x - Math.floor(x)) * 10;
};

const CardDeck = ({ cards, onComplete, activeIndex, setActiveIndex, isIntroDone, setIsIntroDone }: CardDeckProps) => {
    const completedRef = useRef(false);
    const [isMobile, setIsMobile] = useState(false);

    const [cardSprings, cardApi] = useSprings(cards.length, (i) => ({
          from: {
            x: 0,
            y: -900,
            opacity: 0.5,
            rotate: [-6, 4, -2, 7][i % 4],
            scale: 0.9,
        },
        to: {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: stableRotation(i),
            scale: 1,
        },
        delay: i * 250,
        config: config.slow,
        onRest:
            i === cards.length - 1
            ? () => {
                if (!completedRef.current) {
                    completedRef.current = true;
                    setIsIntroDone(true);
                    onComplete();
                }
                }
            : undefined,
    }));

    const bind = useDrag(({ args: [index], active, movement: [mx], velocity: [vx], direction: [dx] }) => {
        if (!isIntroDone || index !== activeIndex) return;

        const committed =
            !active && (Math.abs(vx) > 0.3 || Math.abs(mx) > 80);

        cardApi.start((i) => {
            if (i !== index) return;

            if (committed) {
                return {
                    x: dx > 0 ? 500 : -500,
                    // x: -500,
                    scale: 1,
                    opacity: 0,
                    config: { tension: 200, friction: 30 },
                };
            }

            return {
                x: active ? mx : 0,
                scale: active ? 0.97 : 1,
                config: active ? { tension: 800, friction: 30 } : config.stiff,
            };
        });

        if (committed) {
            setActiveIndex((prev) => Math.min(prev + 1, (cards.length - 1)));
        }
    });

    useEffect(() => {
        if (!isIntroDone) return;

        cardApi.start((i) => {
            if (i !== activeIndex) return;
            return { rotate: 0, config: config.stiff };
        });

    }, [activeIndex, isIntroDone, cardApi]);

    useEffect(() => {
        const handleIsMobile = async () => {
            const isOnMobile = await checkMobile();
            setIsMobile(isOnMobile);
        };
        handleIsMobile();
    }, []);

  return (
    <div
        className="relative w-full h-full flex justify-center"
    >

        {!isMobile && <Image
            className={`pt-9 z-10 object-contain scale-177 pointer-events-none transition-opacity duration-500 delay-600 ease-in ${!isIntroDone ? 'opacity-0' : 'opacity-100'}`}
            src={phoneFrameNoBg}
            alt="phone frame image"
            priority
            fill
        />}

        <div className="relative h-full w-full">
            {cardSprings.map((spring, i) => (
                <animated.div
                    key={cards[i].id}
                    {...bind(i)}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: i === activeIndex ? 10 : i,
                        pointerEvents: isIntroDone && i === activeIndex ? 'auto' : 'none',
                        x: spring.x,
                        y: spring.y,
                        opacity: spring.opacity,
                        rotate: spring.rotate,
                        scale: spring.scale,
                        touchAction: 'none',
                        cursor: isIntroDone && i === activeIndex ? 'grab' : 'default',
                    }}
                >
                    <ProfileCard 
                        id={cards[i].id}
                    >
                        {cards[i].children}
                    </ProfileCard>
                </animated.div>
            ))}
        </div>

    </div>
  );
};

export default CardDeck;