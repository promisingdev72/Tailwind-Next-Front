import { useState } from "react";

import Link from 'next/link'
import Image from "next/image";


// import MobileMenu from "./mobile_menu";
import TopBar from "./top_bar";

import menuItems from "./menu_items.json";
import Logo from '~/public/images/logo.png';

export default function Header(){
    
    return(
        <>
            <div className='bg-primary-color'>
                <TopBar />
            </div>
            <div className="bg-home-back bg-cover bg-no-repeat lg:h-screen h-2/3 lg:pb-0  pb-32">
                <div className="hidden justify-center lg:flex">
                    <ul className="flex mt-6">
                        {menuItems.map((item) => (
                        <li
                            className="mr-12 font-basic text-white text-xl flex"
                            key={item.label}
                        >
                            <Link href={item.url}>
                                <a>{item.label}</a>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="flex lg:justify-center justify-start items-center flex-col h-3/4 ">
                    <div className="lg:block hidden">
                        <Image src={Logo}/>
                    </div>
                    <p className="text-center text-white text-2xl my-10 font-basic">
                        Dialogues est née en 2003 de notre conviction que beaucoup de responsables <br></br>
                        d'entreprise comme de syndicalistes avaient la volonté d'un dialogue social innovant leur <br></br>
                        permettant de bâtir des relations sociales de qualité et à la hauteur des enjeux nouveaux. <br></br>
                    </p>
                    <button className="text-third px-20 py-3 text-third-color bg-white rounded-full text-xl font-basic border border-third-color">Nous connaitre</button>
                </div>
            </div>
        </>
    )
}
