import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <>
      <div className="px-12 py-16 bg-secondary-color lg:block hidden">
        <div className="border-b-2 border-white flex py-4 w-full justify-between">
          <div className="text-white font-basic">
            <h6>Qui-sommes-nous ?</h6>
            <h6>Le mot du Ministre</h6>
            <h6>Le mot du Président</h6>
            <h6>Actualités</h6>
            <h6>Evénements </h6>
          </div>
          <div className="text-white font-basic">
            <h6>Notre histoire</h6>
            <h6>Les sections</h6>
            <h6>Les médailles</h6>
            <h6>Comment adhérer ?</h6>
            <h6>Mentions légales et crédits</h6>
          </div>
          <div className="flex items-end mx-8 justify-center">
            <div className="mr-8">
              <IoLogoTwitter className="text-white text-2xl" />
            </div>
            <div className="mr-8">
              <GrFacebookOption className="text-white text-2xl" />
            </div>
            <div className="mr-8">
              <IoLogoLinkedin className="text-white text-2xl"/>
            </div>
            <div className="mr-8">
              <IoLogoYoutube className="text-white text-2xl" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-end">
              <h1 className="text-white font-basic">Inscrivez-vous à notre newsletter</h1>
              <div className="ml-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="outline-none w-64 p-1.5"
                />
              </div>
            </div>
            <div className="flex mt-4">
              <div className="mr-2">
                <input type="checkbox"/>
              </div>
              <div className="text-white text-base font-basic">
                J’ai pris connaissance de la <u>Politique de confidentialité</u>
                de l'AMOMA.<br></br>
                Je peux me desinscrire à tout moment à l’aide des liens de
                desinscription <br></br>
                ou en contactant l'AMOMA à l’adresse desinscription@amoma.fr
              </div>
              <div className="ml-4">
                <button className="p-2 text-white font-basic text-lg bg-primary-color">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 py-16 bg-secondary-color block lg:hidden">
        <div className="border-b-2 border-white flex flex-col py-4 w-full justify-between">
          <div className="flex items-center justify-around">
            <h1 className="text-white font-basic">Inscrivez-vous à notre newsletter</h1>
            <div className="ml-4">
              <input
                type="email"
                placeholder="Email"
                className="outline-none w-64 p-1.5"
              />
            </div>
          </div>
          <div className="flex mt-6 justify-around">
            <div className="mr-2">
              <input type="checkbox"/>
            </div>
            <div className="text-white text-base font-basic">
              J’ai pris connaissance de la <u>Politique de confidentialité</u>
              de l'AMOMA.<br></br>
              Je peux me desinscrire à tout moment à l’aide des liens de
              desinscription <br></br>
              ou en contactant l'AMOMA à l’adresse desinscription@amoma.fr
            </div>
            <div className="ml-4">
              <button className="p-2 text-white font-basic text-lg bg-primary-color">
                OK
              </button>
            </div>
          </div>
          <div className="flex justify-start mt-6">
            <div className="text-white font-lg mr-6">
              <h6>Qui-sommes-nous ?</h6>
              <h6>Le mot du Ministre</h6>
              <h6>Le mot du Président</h6>
              <h6>Actualités</h6>
              <h6>Evénements </h6>
            </div>
            <div className="text-white font-lg">
              <h6>Notre histoire</h6>
              <h6>Les sections</h6>
              <h6>Les médailles</h6>
              <h6>Comment adhérer ?</h6>
              <h6>Mentions légales et crédits</h6>
            </div>
          </div>
          <div className="flex items-end mx-8 justify-start mt-6">
            <div className="mr-8">
              <IoLogoTwitter className="text-white text-2xl" />
            </div>
            <div className="mr-8">
              <GrFacebookOption className="text-white text-2xl" />
            </div>
            <div className="mr-8">
              <IoLogoLinkedin className="text-white text-2xl"/>
            </div>
            <div className="mr-8">
              <IoLogoYoutube className="text-white text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
