'use client';
import Image from "next/image";
import { JSX } from "react/jsx-runtime";
import borderCompressed from "../../public/images/borderCompressed.png";

export type ProfileCardData = {
  id: number;
  imageSrc?: string;
  children: JSX.Element;
};

const ProfileCard = ({ id, imageSrc, children }: ProfileCardData) => {

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl shadow-xl">
      <Image
        className="h-full w-full object-cover"
        src={borderCompressed}
        alt="profile border"
        priority
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-background to-foreground p-4 -z-10"
      >
        {/* <p className="text-center mt-2">{activeBtn}</p> */}
        {/* {children} */}
        <p>yes</p>
      </div>
    </div>
  );
};

export default ProfileCard;