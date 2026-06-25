'use client';
import Image from "next/image";
import AppStoreBadgeBlk from "../../public/AppStoreBadgeBlk.svg";
import LottieComponent from "@/components/LottieComponent";
import Link from "next/link";
import Herosection from "@/components/Herosection";
import { useState } from "react";

export default function Home() {

  const [isDeckRendered, setIsDeckRendered] = useState(false);
  const [introTransitionDone, setIntroTransitionDone] = useState(false);

  return (
    <main className="relative max-w-full flex flex-col items-center">

      <aside
        onTransitionEnd={() => {
            if (isDeckRendered) setIntroTransitionDone(true);
          }}
          className={`relative flex flex-col w-fit max-w-[calc(30vw-2rem)] md:absolute md:left-[4%] lg:left-[6%] 2xl:left-[15%] 
          ${
            introTransitionDone
              ? ''
              : 'transition-[opacity,top] delay-500 duration-600 ease-in-out'
          }
          ${
            !isDeckRendered
            ? 'opacity-0 top-[30%] md:top-[25%]'
            : 'opacity-100 2xl:top-[40%] md:top-[40%]'
          }`
        }
      >

        <div>
          <h2 className="lg:text-xl mb-2 text-center font-bold text-tabFont">swipe the cards to learn more :)</h2>
        </div>

      </aside>
      
      <Herosection 
        isDeckRendered={isDeckRendered}
        setIsDeckRendered={setIsDeckRendered}
      />

      <aside
        onTransitionEnd={() => {
          if (isDeckRendered) setIntroTransitionDone(true);
        }}
        className={`relative flex flex-col w-fit max-w-[calc(34vw-2rem)] md:absolute md:right-[1.5%] lg:right-[3%] 2xl:right-[6%] 
        ${
          introTransitionDone
            ? ''
            : 'transition-[opacity,top] delay-500 duration-600 ease-in-out'
        } 
        ${
          !isDeckRendered
          ? 'opacity-0 top-[10%] md:top-[5%]' 
          : 'opacity-100 2xl:top-[28%] lg:top-[8%] md:top-[10%]'
        }`}
      >
        
        <div className="flex flex-col 2xl:flex-row items-center justify-center -z-10">

          <LottieComponent />

          <div>

            <div className="w-[clamp(12rem, 90vw, 18rem)] flex flex-col gap-2 items-center">
              <h2 className="lg:text-xl mb-4 text-center font-bold text-tabFont">welcome to pet-a-pet!</h2>
              <h2 className="text-tabFont text-center text-sm lg:text-base">an app that helps you connect with pet owners and just people who love pets in general :)</h2>
              {/* <div>
                <Link href={'/about'} className="text-foreground hover:border-b text-sm lg:text-base">learn more about it</Link>
              </div> */}
            </div>

            <div 
              className={`mt-6 mb-4 flex flex-col items-center justify-center transition-opacity delay-1000 duration-1000 ease-in ${
                !isDeckRendered 
                  ? 'opacity-0' 
                  : 'opacity-100'
              }`}
            >
              <Image
                src={AppStoreBadgeBlk}
                alt="app icon"
                width={150}
                height={150}
                priority
              />
            </div>
            
          </div>
          
        </div>

      </aside>

    </main>
  );
};