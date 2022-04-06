import { log } from "console";
import { useState } from "react";

import TutorialItem from "./tutorialItem";

import tutorialItems from "./tutorial_items.json";


export default function Tutorial(){
    
    return(
        <>
           <div className="block lg:flex justify-evenly mt-10">
                {
                    tutorialItems.map((item, index)=> (
                        <TutorialItem url={item.url} btnText={item.btnText} titleText={item.titleText} contentText={item.contentText} key={item.id}/>
                    ))
                }
            </div> 
            <div className="flex justify-center items-center text-center my-4 text-third-color font-bold cursor-pointer">
                <p>Voir plus de videos</p>
            </div>
        </>
    )
}