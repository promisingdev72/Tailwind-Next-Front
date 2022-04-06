import AgendasItems from './agenda_items.json';


export default function Agenda(){
    return(
        <>
            <div className="flex justify-center flex-col lg:px-14 px-4">
                <div className="flex flex-col justify-center items-center bg-primary-color lg:px-24 px-8 pt-1 lg:pb-14 pb-2">
                    <div className="text-center text-white font-basic text-6xl my-4">
                        <p>L’agenda</p>
                    </div>
                    <div className="text-center text-white font-basic text-lg my-4">
                        <p>
                            Les initiatives programmées, à l’exception des colloques, sont réservées à nos adhérents. <br></br>
                            Les textes issus de ces initiatives sont rendus publics avec l’accord des acteurs concernés. <br></br>
                        </p>
                    </div>
                    <div className="lg:grid gap-8 grid-flow-col block">
                        <div className='flex justify-center h-8 lg:hidden'>
                            <select className='rounded w-2/3 h-12 px-4 border-third-color focus:border-none text-third-color focus-visible:outline-0 font-bold'>
                                {
                                    AgendasItems.map((item, index)=>(
                                        <option>{item.btnText}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="hidden lg:flex flex-col lg:my-2 my-8">
                            {
                                AgendasItems.map((item, index)=>(
                                    <button key={item.id} className='rounded-lg text-third-color font-basic text-3xl border border-third-color bg-white px-5 my-1'>{item.btnText}</button>
                                ))
                            }
                        </div>
                        <div className='flex justify-center items-center lg:my-2 my-8'>
                            <img src='/images/calendar.png'></img>
                        </div>
                        <div className='flex flex-col justify-start bg-white p-4 lg:my-2 my-8'>
                            <div>
                                <p className='rounded-lg text-third-color border font-basic border-third-color px-3 py-1'>Clubs</p>
                            </div>
                            <div className='font-bold text-third-color text-lg my-1'>
                                <p>
                                    En visioconférence Club RH avec <br></br>
                                    Gilles Gateau, Directeur Général de <br></br>
                                    l'APEC
                                </p>
                            </div>
                            <div className='font-bold text-primary-color text-lg my-1'>
                                <p>07 décembre 2020 / 09:30 - 10:45</p>
                            </div>
                            <div className='font-basic text-third-color text-lg'>
                                <p>
                                    Quelles perspectives d'emploi pour <br></br>
                                    l'encadrement en 2021, dans le contexte de <br></br>
                                    la crise sanitaire et économique qui sévit ?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center font-bold text-third-color text-lg mt-4 cursor-pointer'>
                        <p>
                            Voir toutes les rencontres
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}