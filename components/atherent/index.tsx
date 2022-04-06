
export default function Atherent(){
    return(
        <>
            <div className="flex flex-col items-center my-4 border-b-2 border-gray-500">
                <div className="font-basic text-third-color text-6xl text-center my-6">
                    <p>Adhérents</p>
                </div>
                <div className="hidden lg:flex justify-between w-full">
                    <img src='/images/item1.png'/>
                    <img src='/images/item2.png'/>
                    <img src='/images/item3.png'/>
                    <img src='/images/item4.png'/>
                    <img src='/images/item5.png'/>
                    <img src='/images/item6.png'/>
                    <img src='/images/item7.png'/>
                </div>
                <div className="flex lg:hidden justify-between w-full">
                    <img src='/images/item3.png'/>
                    <img src='/images/item4.png'/>
                    <img src='/images/item5.png'/>
                </div>
                <div className="font-bold text-third-color text-lg text-center cursor-pointer my-4">
                    <p>Voir tous les adhérents</p>
                </div>
            </div>
            <div className="flex flex-col items-center my-4 border-b-2 border-gray-500">
                <div className="font-basic text-third-color text-6xl text-center my-6">
                    <p>Partenaires</p>
                </div>
                <div className="hidden lg:flex justify-between w-full">
                    <img src='/images/item7.png'/>
                    <img src='/images/item6.png'/>
                    <img src='/images/item4.png'/>
                    <img src='/images/item1.png'/>
                    <img src='/images/item2.png'/>
                    <img src='/images/item5.png'/>
                    <img src='/images/item3.png'/>
                </div>
                <div className="flex lg:hidden justify-between w-full">
                    <img src='/images/item7.png'/>
                    <img src='/images/item6.png'/>
                    <img src='/images/item4.png'/>
                </div>
                <div className="font-bold text-third-color text-lg text-center cursor-pointer my-4">
                    <p>Voir tous les adhérents</p>
                </div>
            </div>
        </>
    )
}