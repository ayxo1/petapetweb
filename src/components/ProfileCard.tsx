'use client';
import Image, { StaticImageData } from "next/image";
import { JSX } from "react/jsx-runtime";
import borderCompressed from "../../public/images/borderCompressed.png";

export type ProfileCardData = {
  id: number;
  imageSrc?: StaticImageData;
  children: JSX.Element;
  bg?: string;
};

const ProfileCard = ({ children, imageSrc, bg = 'bg-linear-to-t from-background to-foreground' }: ProfileCardData) => {

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl shadow-xl">
      <Image
        className="h-full w-full object-cover"
        src={borderCompressed}
        alt="profile border"
        priority
        draggable={false}
      />
      <div
        className='absolute inset-0 p-4 -z-10'
      >
        {imageSrc && <Image
          className="h-full w-full scale-y-104 scale-x-108"
          src={imageSrc}
          alt=''
          priority
          draggable={false}
          // fill
        />}
        {/* {children} */}
      </div>
    </div>
  );
};

export default ProfileCard;