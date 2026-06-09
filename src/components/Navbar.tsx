import iconHeart from '../../public/icons/iconHeart.png';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='p-4 sticky top-0 bg-background z-50'>
      <div className='flex justify-between px-48 w-full'>

        <div className='flex flex-row gap-6'>
          <Link href={'/'} className='flex flex-col gap-2 justify-center'>
            <Image
              className="peer w-7/12 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
              src={iconHeart}
              alt="heart icon"
              width={80}
              height={100}
              priority
            />
            {/* <Image
              className="absolute -top-1 left-[13.15rem] h-3 opacity-0 w-6 transition delay-150 duration-500 ease-in-out hover:-translate-y-1 peer-hover:scale-105 peer-hover:opacity-100"
              src={glow}
              alt="glow icon"
              width={5}
              height={5}
              priority
            /> */}
            <p className='absolute top-10 left-51 text-sm text-foreground opacity-0 transition delay-150 duration-300 ease-in-out peer-hover:opacity-100'>home</p>
          </Link>
        </div>

        <div className='flex fle-row gap-6 items-center text-lg'>
          <Link 
            href={'/about'} 
            className='bg-lighterSecondary text-foreground border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background'
          >
            about
          </Link>
          <Link 
            className='bg-lighterSecondary text-foreground border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background'
            href={'/privacy'}
          >
            privacy policy
          </Link>
          <Link
            className='bg-lighterSecondary text-foreground border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background'
            href={'/terms'}
          >
            terms of service
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default NavBar