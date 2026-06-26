'use client';
import { config, useSprings, animated } from "@react-spring/web";
import ProfileCard from "./ProfileCard";
import { useEffect, useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import Image from "next/image";
import phoneFrame2 from "../../public/images/phoneFrame2.png";
import { checkMobile } from "@/app/utils/handleMobile";
import { CardDeckProps } from "@/types/cards";

const stableRotation = (seed: number) => {
  const x = Math.sin(seed * 999) * 10000;
  return -8 + (x - Math.floor(x)) * 10;
};

const CardDeck = ({ cards, onComplete, activeIndex, setActiveIndex, isIntroDone, setIsIntroDone }: CardDeckProps) => {
    const completedAnimRef = useRef(false);
    const goneCardsRef = useRef(new Set<number>());

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
                    if (!completedAnimRef.current) {
                        completedAnimRef.current = true;
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
                    x: dx > 0 ? 400 : -400,
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
            goneCardsRef.current.add(index);
            setActiveIndex(() => {
                for (let i = index + 1; i < cards.length; i++) {
                    if (!goneCardsRef.current.has(i)) return i;
                }

                for (let i = index - 1; i >= 0; i--) {
                    if (!goneCardsRef.current.has(i)) return i;
                }

                return index;
            });

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

    useEffect(() => {
        if (cardSprings[activeIndex].x.get() !== 0) {
            cardSprings[activeIndex].x.set(0);
            cardSprings[activeIndex].opacity.set(1);
            goneCardsRef.current.delete(activeIndex);
        }
    }, [activeIndex, cardSprings]);

  return (
    <div
        className="relative w-full h-full flex justify-center"
    >

        {!isMobile && <Image
            className={`pt-9 z-10 object-contain scale-140 pointer-events-none transition-opacity duration-500 delay-600 ease-in ${!isIntroDone && !isMobile ? 'opacity-0' : 'opacity-100'}`}
            src={phoneFrame2}
            alt="phone frame image"
            priority
            fill
        />}

        <div className="relative h-full w-full">
            {cardSprings.map((spring, i) => {
                const nonActiveIndex = 
                    spring.x.get() === -400 || 
                    spring.x.get() === 0 ||
                    spring.x.get() === 400
                        ? 9 - i 
                        : 10
                return (
                <animated.div
                    key={cards[i].id}
                    {...bind(i)}
                    className=' scale-y-107 scale-x-96'
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: i === activeIndex ? 10 : nonActiveIndex,
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
                        imageSrc={cards[i].imageSrc}
                        name={cards[i].name}
                    >
                        {cards[i].children}
                    </ProfileCard>
                </animated.div>
                )
            })}
            {isIntroDone && <button 
                className="absolute top-1/2 right-1/2 z-0 items-center translate-x-1/2 -translate-y-1/2 bg-lighterSecondary text-foreground border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background text-center"
                onClick={() => {
                    cardSprings.map((_, i) => {
                        cardApi.start(() => ({
                            x: 0,
                            y: 0,
                            opacity: 1,
                            rotate: stableRotation(i),
                            scale: 1,
                        }))
                    })
                    setActiveIndex(0);
                    goneCardsRef.current.clear();
                }}
            >
                reset the cards
            </button>}
        </div>

    </div>
  );
};

export default CardDeck;