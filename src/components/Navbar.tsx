import React from 'react';
import exploreIconTest from '../../public/icons/exploreIconTest.png';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='p-2 rounded-2xl'>
      <div className='flex justify-between px-10'>

        <div className='flex flex-row gap-4'>
          <p className='text-sm font-extralight'>pet-a-pet</p>

          <Image
            className=""
            src={exploreIconTest}
            alt="pet-a-pet logo"
            width={100}
            height={100}
            priority
            />
        </div>

        <div className='flex fle-row gap-4 items-center text-lg'>
          <Link 
            href={'/about'} 
            className='bg-lighterSecondary text-foreground border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background'
          >
            about
          </Link>
          <p className='bg-lighterSecondary text-foreground border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background'>privacy policy</p>
          <p className='bg-lighterSecondary text-foreground border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background'>terms of service</p>
        </div>

      </div>
    </nav>
  )
}

export default NavBar