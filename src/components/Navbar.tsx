'use client';
import iconHeart from '../../public/icons/iconHeart.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'privacy policy', href: '/privacy'},
  { name: 'terms of service', href: '/terms'}
];

const NavBar = () => {

  const pathname = usePathname();

  return (
    <nav className='p-4 sticky top-0 bg-background/50 z-50' aria-label='main navigation'>
      <div className='flex justify-between px-[10%] md:px-[15%] w-full'>

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

        <div className='flex fle-row gap-6 items-center text-lg'>
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
                border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background text-sm lg:text-lg text-center`}
              href={navLink.href}
            >
              {navLink.name}
            </Link>
            )
          })}
          {/* <Link 
            className={`truncate ${pathname ? 'bg-lighterSecondary text-foreground' : ''} border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background text-sm lg:text-lg text-center`}
            href={'/privacy'}
          >
            privacy policy
          </Link>
          <Link
            className='truncate bg-lighterSecondary text-foreground border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background text-sm lg:text-lg text-center'
            href={'/terms'}
          >
            terms of service
          </Link> */}
        </div>

      </div>
    </nav>
  );
};

export default NavBar;