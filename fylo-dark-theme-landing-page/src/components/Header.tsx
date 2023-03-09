import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='flex justify-between items-center max-w-[86rem] mx-auto mt-5 sm:mt-[4.5rem] px-4 xsm:px-8 sm:px-12 text-white font-raleway text-sm sm:text-base select-none'>
      <img src="/logo.svg" alt="The Fylo logo." className="xsm:pr-6 h-8 sm:h-fit pointer-events-none"/>
      <Navbar />
    </header>
  );
}