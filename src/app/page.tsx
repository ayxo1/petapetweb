import Image from "next/image";
import AppStoreBadgeBlk from "../../public/AppStoreBadgeBlk.svg";
import LottieComponent from "@/components/LottieComponent";
import Link from "next/link";
import AppRender from "@/components/AppRender";

export default function Home() {

  return (
    <div>
      <main>
        <AppRender />

        <div className="mb-10">
          <div className="flex items-center justify-center">
            <div>
              <LottieComponent />
            </div>
            <div className="max-w-1/5 flex flex-col gap-2">
              <h1 className="text-xl">welome to pet-a-pet!</h1>
              <p>it&apos;s an app that helps you connect with pet owners and just people who love pets in general :)</p>
              <div>
                <Link href={'/about'} className="text-foreground hover:border-b">learn more about it</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={AppStoreBadgeBlk}
              alt="app icon"
              width={150}
              height={150}
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
};