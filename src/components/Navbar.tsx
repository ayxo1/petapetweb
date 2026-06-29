'use client';
import iconHeart from '../../public/icons/iconHeart.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  // { name: 'download', href: '/'},
  { name: 'privacy policy', href: '/privacy'},
  { name: 'terms of service', href: '/terms'},
  { name: 'contact us', href: '/contact'},
];

const NavBar = () => {

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='p-4 sticky top-0 bg-background/50 z-50' aria-label='main navigation'>

      <div className='flex justify-between px-[15%] w-full'>

        <div className='flex flex-row gap-6 relative'>
          <Link href={'/'} className='flex flex-col gap-2 justify-center'>
            <Image
              className="peer w-7/12 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
              src={iconHeart}
              alt="heart icon"
              width={80}
              height={100}
              priority
            />
            <p className='absolute top-[80%] left-[-8%] text-sm text-foreground opacity-0 transition delay-150 duration-300 ease-in-out peer-hover:opacity-100'>home</p>
          </Link>
        </div>

        <div className='flex flex-col md:flex-row gap-6 items-center text-lg'>
          {navLinks.map((navLink, i) => {
            const activeLink = navLink.href === pathname || (pathname.startsWith(navLink.href) && navLink.href !== '/');
            return (
              <Link
                key={i}
                className={`truncate 
                  ${activeLink 
                    ? 'bg-authPrimary text-background' 
                    : 'bg-lighterSecondary text-foreground'
                  } 
                  border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background text-sm lg:text-lg text-center hidden md:inline`}
                href={navLink.href}
              >
                {navLink.name}
              </Link>
            )
          })}

          <button 
            className="md:hidden text-foreground hover:text-authPrimary cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className='text-2xl'>{isMenuOpen ? 'x' : '☰'}</span>
          </button>

          <div 
            className={`flex flex-col absolute transition-[opacity,top,gap,visibility] ease-in-out duration-250 bg-background/95 shadow shadow-lighterSecondary/30 rounded-b-xl p-2
              ${isMenuOpen
                ? 'opacity-100 top-[110%] gap-2 pointer-events-auto visible md:invisible'
                : 'opacity-0 top-[60%] gap-0 pointer-events-none invisible'
            } right-[4.5%]`}
          >
            {navLinks.map((navLink, i) => {
              const activeLink = navLink.href === pathname || (pathname.startsWith(navLink.href) && navLink.href !== '/');
              return (
                <Link
                  key={i}
                  className={`truncate
                    ${activeLink
                      ? 'text-lighterSecondary' 
                      : 'text-foreground'
                    } 
                    py-.5 px-2 hover:text-authPrimary text-center`}
                  href={navLink.href}
                >
                  {navLink.name}
                </Link>
              );
            })}
          </div>

        </div>

      </div>
    </nav>
  );
};

export default NavBar;