import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import MobileMenu from "./mobile_menu";

import images from "~/images";

const {Flag, Logo} = images;



export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="relative lg:pr-40 pr-0 pt-4 pb-3">
      <ul className="hidden justify-end items-center lg:flex">
        <Link href="/">
          <a>
            <li className="flex items-center mr-12">
              <IoLogoTwitter className="text-white text-2xl" />
            </li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className="flex items-center mr-11">
              <GrFacebookOption className="text-white text-2xl" />
            </li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className="flex items-center mr-11">
                <IoLogoLinkedin className="text-white text-2xl"/>
            </li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className="flex items-center mr-32">
              <IoLogoYoutube className="text-white text-2xl" />
            </li>
          </a>
        </Link>
        <Link href="/">
          <a>
            <li className="flex items-center mr-6">
              <IoMail className="text-white text-2xl" />
            </li>
          </a>
        </Link>
        <li className="flex items-center mr-12 relative cursor-pointer">
          <IoNotifications className="text-white text-2xl" />
          <span className="absolute top-0 right-0 text-white bg-gray-200 rounded-full w-3.5 h-3.5 text-xs text-center">
            2
          </span>
        </li>
        <li className="flex items-center mr-6 relative">
          <input
            type="text"
            className="focus: outline-none placeholder:italic rounded-full pl-3 pr-8 h-8 w-60 bg-primary-color text-white border border-white"
          />
          <IoSearch className="text-white text-2xl absolute right-2 top-1" />
        </li>
        <Link href="/">
          <a>
            <li className="flex items-center mr-6">
              <IoPersonCircle className="text-white text-3xl" />
            </li>
          </a>
        </Link>
        <li className="flex items-center cursor-pointer">
          <Image src={Flag} />
        </li>
      </ul>
      <ul className="lg:hidden flex justify-around items-center">
        <li className="flex items-center cursor-pointer">
          <Image src={Logo}/>
        </li>
        <li className="flex text-4xl cursor-pointer" onClick={toggleMenu}>
          {
            isMenuOpen?<IoClose className="ml-auto primary-color text-5xl text-third-color" />:<IoMenu className="ml-auto primary-color text-5xl text-third-color" />
          }
        </li>
      </ul>
      {isMenuOpen && <MobileMenu />}
    </div>
  );
}