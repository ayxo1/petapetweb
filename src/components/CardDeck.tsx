'use client';
import { config, useSprings, animated } from "@react-spring/web";
import ProfileCard, { ProfileCardData } from "./ProfileCard";
import { JSX, useRef } from "react";

type CardDeckProps = {
    cards: ProfileCardData[];
    onComplete: () => void;
};

const getSpringProps = (i: number) => ({
    from: {
        y: -900,
        opacity: 0.5,
        rotate: [-6, 4, -2, 7][i % 4],
        scale: 0.9
    },
    to: {
        y: 0,
        opacity: 1,
        rotate: -6 + i * 2,
        scale: 1
    },
    delay: i * 250,
    config: config.slow
});

const CardDeck = ({ cards, onComplete }: CardDeckProps) => {

    const completedRef = useRef(false);

    const springs = useSprings(
        cards.length,
        cards.map((_, i) => ({
            ...getSpringProps(i),
            onRest: i === cards.length - 1
                ? () => {
                    if (!completedRef.current) {
                        completedRef.current = true;
                        setTimeout(onComplete, 400);
                    }
                }
                : undefined
        })),
    )

  return (
    <div
        className="relative w-full h-full flex justify-center"
    >
        <div className="relative h-full w-full">
            {springs.map((spring, i) => (
                <animated.div
                    key={cards[i].id}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: i,
                        y: spring.y,
                        opacity: spring.opacity,
                        rotate: spring.rotate,
                        scale: spring.scale,
                        transformOrigin: 'bottom center',
                        willChange: 'transform, opacity'
                    }}
                >
                    <ProfileCard 
                        id={cards[i].id}
                    >
                        <></>
                    </ProfileCard>
                </animated.div>
            ))}
        </div>

    </div>
  );
};

export default CardDeck;