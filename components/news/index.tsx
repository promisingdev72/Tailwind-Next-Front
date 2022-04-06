
export default function News(){
    return(
        <>
            <div className="bg-fourth-color justify-center items-center px-8 lg:px-32 lg:py-24 py-4">
                <div className="font-basic text-third-color text-6xl text-center mb-14 uppercase">
                    <p>ActuAlités et publications</p>
                </div>
                <div className="lg:grid grid-cols-3 block gap-8">
                    <div className="col-span-1  lg:flex lg:flex-col flex-row grid grid-cols-2 justify-center">
                        <div className="border-t-2 border-white pt-2 lg:mb-4 mb-0">
                            <p className="font-bold text-white text-2xl">Publication</p>
                            <p className="font-basic text-third-color text-xl">
                                La lettre de Dialogues <br></br>
                                Note de veille sociale <br></br>
                                Regard sur le social <br></br>
                                Nos plaquettes
                            </p>
                        </div>
                        <div className="border-t-2 border-white pt-2 lg:my-4 my-0">
                            <p className="font-bold text-white text-2xl">Documentation</p>
                            <p className="font-basic text-third-color text-xl">
                                Sondages <br></br>
                                Supports d'intervention <br></br>
                                Analyses 
                            </p>
                        </div>
                        <div className="border-t-2 border-white pt-2 my-4">
                            <p className="font-bold text-white text-2xl">
                                Dans la presse 
                            </p>
                        </div>
                        <div className="border-y-2 border-white py-2 mt-4">
                            <p className="relative font-bold text-white triangle text-2xl">
                                Actualités
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 border-y-2 border-white py-4">
                        <div className="flex items-center">
                            <div>
                                <img src="/images/avatar.png"/>
                            </div>
                            <div className="ml-8">
                                <p className="font-bold text-white text-xl">Actualité</p>
                                <p className="font-basic text-third-color text-lg">2 mars 2022</p>
                                <p className="font-bold text-third-color text-2xl">
                                    Laurence Laigo nommée <br></br>
                                    Directrice Générale de Dialogues
                                </p>
                            </div>
                        </div>
                        <div className="font-basic text-xl text-third-color mt-6">
                            <p>
                             Après 18 ans passés à la direction de Dialogues et en avoir été, avec Jean Peyrelevade le <br></br>
                             fondateur, Jean-Dominique Simonpoli a décidé de passer la main. Laurence Laigo, ancienne <br></br>
                             dirigeante de la CFDT, passée par le conseil en entreprise lui a succédé le 1er avril 2021. Son <br></br>
                             parcours et son engagement pour le dialogue ...
                            </p>
                        </div>
                        <div className="flex justify-between mt-20">
                            <div className="font-bold text-third-color text-xl">
                                <p>
                                    Lire la suite
                                </p>
                            </div>
                            <div className="font-bold text-third-color text-xl">
                                <p>
                                    Télécharger
                                </p>
                            </div>
                            <div className="font-bold text-third-color text-xl">
                                <p>
                                    Voir toutes les actus
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

