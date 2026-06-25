import iconHeart from '../../public/icons/iconHeart.png';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='p-4 sticky top-0 bg-background/50 z-50'>
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

        <div className='flex fle-row gap-6 items-center text-lg'>
          {/* <Link 
            href={'/about'} 
            className='bg-lighterSecondary text-foreground border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background text-sm lg:text-lg'
          >
            about
          </Link> */}
          <Link 
            className='truncate bg-lighterSecondary text-foreground border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background text-sm lg:text-lg text-center'
            href={'/privacy'}
          >
            privacy policy
          </Link>
          <Link
            className='truncate bg-lighterSecondary text-foreground border border-foreground py-.5 px-2 rounded-2xl shadow hover:bg-authPrimary hover:text-background text-sm lg:text-lg text-center'
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