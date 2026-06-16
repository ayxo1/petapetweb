'use client';
import { useEffect, useRef, useState } from "react";
import ProfileCard, { ProfileCardData } from "./ProfileCard";
import { useSprings, config, animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";


const VELOCITY_THRESHOLD = 0.3;
const DISTANCE_THRESHOLD = 80;

const CARD_W = 300;
const CARD_H = 420;
const PHONE_W = 220;
const PHONE_H = 460;
const PHONE_RADIUS = 44

type CardCarouselProps = {
  cards: ProfileCardData[];
  skipMorph?: boolean;
};

const CardCarousel = ({ cards, skipMorph }: CardCarouselProps) => {

    const [activeIndex, setActiveIndex] = useState(cards.length - 1);
    const [morphDone, setMorphDone] = useState(skipMorph);
    const [showFrame, setShowFrame] = useState(skipMorph);

    const [morphSpring, morphApi] = useSpring(() => ({
        width: skipMorph ? PHONE_W : CARD_W,
        height: skipMorph ? PHONE_H : CARD_H,
        borderRadius: skipMorph ? PHONE_RADIUS : 24,
        config: { tension: 160, friction: 28 },
        onRest: () => {
        if (!morphDone) {
            setMorphDone(true);
            setTimeout(() => setShowFrame(true), 100);
        }
        },
    }));
 
    useEffect(() => {
        if (!skipMorph) {
            const timer = setTimeout(() => {
            morphApi.start({
                width: PHONE_W,
                height: PHONE_H,
                borderRadius: PHONE_RADIUS,
            });
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [morphApi, skipMorph]);

    const [cardSprings, cardApi] = useSprings(cards.length, (i) => ({
        x: 0,
        scale: 1,
        opacity: i >= activeIndex - 1 ? 1 : 0,
        config: config.default,
    }));

    const gone = useRef(new Set<number>());

    const bind = useDrag(
        ({
            args: [index],
            active,
            movement: [mx],
            velocity: [vx],
            direction: [dx],
        }) => {
            if (index !== activeIndex) return;
        
            const isCommitted =
                !active && (Math.abs(vx) > VELOCITY_THRESHOLD || Math.abs(mx) > DISTANCE_THRESHOLD);
        
            if (isCommitted) {
                gone.current.add(index);

                cardApi.start((i) => {
                if (i !== index) return;
                return {
                    x: dx > 0 ? 500 : -500,
                    scale: 1,
                    config: { tension: 200, friction: 30 },
                };
                });
                setActiveIndex((prev) => Math.max(prev - 1, 0));
            } else {
                cardApi.start((i) => {
                if (i !== index) return;
                return {
                    x: active ? mx : 0,
                    scale: active ? 0.97 : 1,
                    config: active
                    ? { tension: 800, friction: 30 }
                    : config.stiff,
                };
                });
            }
        }
    );

  return (
    <div className="relative flex items-center justify-center">

        <animated.div
            style={{
                position: "relative",
                width: morphSpring.width,
                height: morphSpring.height,
                borderRadius: morphSpring.borderRadius,
                overflow: 'hidden',
                boxShadow: "0 30px 80px rgba(0,0,0,0.4)"
            }}
        >

            {cardSprings.map((spring, i) => (
                <animated.div
                    key={cards[i].id}
                    {...bind(i)}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: i === activeIndex ? 10 : i,
                        pointerEvents: i === activeIndex ? 'auto' : 'none',
                        x: spring.x,
                        scale: spring.scale,
                        opacity: spring.opacity,
                        touchAction: 'none',
                    }}
                >
                    <ProfileCard
                        id={cards[i].id}

                    >
                        <></>
                    </ProfileCard>
                </animated.div>
            ))}

        </animated.div>

    </div>
  );
};

export default CardCarousel;