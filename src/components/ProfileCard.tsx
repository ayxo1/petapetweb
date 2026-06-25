'use client';
import Image from "next/image";
import borderCompressed from "../../public/images/borderCompressed.png";
import { card } from "@/types/cards";

const ProfileCard = ({ imageSrc, children, id, name }: card) => {

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
        className='absolute inset-0 p-4 -z-10 bg-linear-to-t from-background to-foreground'
      >
        {imageSrc && <Image
          className="h-full w-full scale-y-104 scale-x-108"
          src={imageSrc}
          alt={name}
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