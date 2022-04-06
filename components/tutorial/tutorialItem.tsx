import { useState } from "react";

// import Image from "next/image";


import Play from "../../public/images/play.png";

export default function TutorialItem(props){
    
    return(
        <>
            <div className="flex flex-col justify-center">
                <div className="relative flex justify-center">
                    <img src={props.url}/>
                    <img src='/images/play.png' className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'/>
                </div>
                <button className="text-third-color mx-auto rounded-lg my-4 text-xl font-basic border border-third-color w-3/4">{props.btnText}</button>
                <h5 className="text-third-color font-bold text-xl mx-auto">
                    {props.titleText}
                </h5>
                <h5 className="flex mx-auto font-italic text-third-color text-lg">
                    {props.contentText}
                </h5>
            </div>
        </>
    )
}