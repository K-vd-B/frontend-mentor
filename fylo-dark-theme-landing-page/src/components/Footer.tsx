import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-fe-dark-blue-3 text-white font-raleway px-4 xsm:px-8 sm:px-12 pt-5 pb-[4.5rem] mx-auto">
        <div className="max-w-7xl mx-auto">
            <img src="logo.svg" alt="The Fylo logo." className="mx-auto lg:mx-0" />
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12 lg:gap-20 flex-wrap mt-6 ">
                <div className="flex flex-row max-w-sm flex-1">
                    <img src="icon-location.svg" alt="A location icon." className="h-6 w-auto mr-5 pt-1"/>
                    <p className="text-center lg:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua
                    </p>
                </div>
                <div className="flex flex-col gap-3 text-sm">
                    <div className="flex flex-row items-center">
                        <img src="icon-phone.svg" alt="" className="h-4 w-auto mr-5"/>
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img src="icon-email.svg" alt="" className="h-4 w-auto mr-5"/>
                        <p>example@fylo.com</p>
                    </div>
                </div>
                <div className="flex flex-row gap-12">
                    <div className="flex flex-col gap-2">
                        <a className="menu-hover-animation pb-1 cursor-pointer w-fit">About Us</a>
                        <a className="menu-hover-animation pb-1 cursor-pointer w-fit">Jobs</a>
                        <a className="menu-hover-animation pb-1 cursor-pointer w-fit">Press</a>
                        <a className="menu-hover-animation pb-1 cursor-pointer w-fit">Blog</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a className="menu-hover-animation pb-1 cursor-pointer w-fit">Contact Us</a>
                        <a className="menu-hover-animation pb-1 cursor-pointer w-fit">Terms</a>
                        <a className="menu-hover-animation pb-1 cursor-pointer w-fit">Privacy</a>
                    </div>
                </div>
                <div className="flex flex-row gap-5">
                    <FaFacebookF className="h-6 w-auto hover:fill-fe-cyan cursor-pointer"/>
                    <FaTwitter className="h-6 w-auto hover:fill-fe-cyan cursor-pointer"/>
                    <FaInstagram className="h-6 w-auto hover:fill-fe-cyan cursor-pointer"/>
                </div>
            </div>
        </div>
    </footer>
  )
}
