import Image from "next/image";
import Link from "next/link";

import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";

import images from "~/images";

import menuItems from "./menu_items.json";

const { Flag } = images;

export default function MobileMenu() {
  return (
    <div className="primary-back absolute w-full z-10 bg-primary-color h-screen opacity-90">
      <div className="flex px-6 py-3 justify-around">
        <div className="flex">
            <IoMail className="text-white text-2xl" />
        </div>
        <div className="relative flex items-center">
        <IoNotifications className="text-white text-2xl" />
        <span className="absolute top-0 right-0 text-white bg-gray-200 rounded-full w-3 h-3 text-xs text-center">
            2
        </span>
        </div>
        <div className="flex items-center mr-6">
        <IoPersonCircle className="text-white text-3xl" />
        </div>
        <div className="min-w-fit flex items-center">
        <Image src={Flag} />
        </div>
      </div>
      <div className="flex relative justify-center px-2">
        <input
          type="text"
          className="focus: outline-none placeholder:italic rounded-full pl-4 pr-8 h-8 w-full bg-primary-color input-back text-white border border-white"
        ></input>
        <IoSearch className="text-white text-2xl absolute right-3 top-1" />
      </div>
      <div className="flex justify-around px-3 py-3">
        <IoLogoTwitter className="text-white text-2xl" />
        <GrFacebookOption className="text-white text-2xl" />
        <IoLogoYoutube className="text-white text-2xl" />
      </div>
      <div className="pl-6 pb-6">
        {menuItems.map((item) => (
            <Link href={item.url}>
                <a>
                    <div
                        className="font-BarlowBold text-white text-xm mt-6"
                        key={item.label}
                    >
                        {item.label}
                    </div>
                </a>
          </Link>
        ))}
      </div>
    </div>
  );
}