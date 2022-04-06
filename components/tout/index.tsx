
export default function Tout(){
    return(
        <>
            <div className="py-12 border-b-2 border-gray-500">
                <div className="text-center text-third-color text-6xl mb-6 font-basic">
                    <p>Tout savoir sur Dialogues</p>
                </div>
                <div className="lg:flex gap-3 grid grid-cols-2 justify-evenly">
                    <div className="flex justify-center">
                        <button className="font-bold text-third-color border border-third-color rounded-lg px-2 w-60 py-1 bg-white text-xl">Notre mission</button>
                    </div>
                    <div className="flex justify-center">
                        <button className="font-bold text-third-color border border-third-color rounded-lg px-2 w-60 py-1 bg-white text-xl">Nos actions</button>
                    </div>
                    <div className="flex justify-center">
                        <button className="font-bold text-third-color border border-third-color rounded-lg px-2 w-60 py-1 bg-white text-xl">L’équipe</button>
                    </div>
                    <div className="flex justify-center">
                        <button className="font-bold text-third-color border border-third-color rounded-lg px-2 w-60 py-1 bg-white text-xl">Rectangle 1 copie 12</button>
                    </div>
                </div>
            </div>
        </>
    )
}