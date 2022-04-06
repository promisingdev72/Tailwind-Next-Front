import Display from "./display";

import images from "~/images";

const { Phone, Message, Location } = images;

export default function Contacts() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-bottom-back bg-100% bg-no-repeat w-full justify-center flex flex-col p-10">
        <div className="font-basic text-4xl text-white mb-8 flex justify-center">
          <p>
            Contact et adhésion
          </p>
        </div>
        <div className="block lg:flex justify-around">
          <div className="flex lg:justify-center justify-start items-center my-2">
            <Display image={Phone} />
            <p className="font-basic text-white ml-4 text-xl">01 45 72 30 32</p>
          </div>
          <div className="flex lg:justify-center justify-start items-center my-2">
            <Display image={Message} />
            <p className="font-basic text-white ml-4 text-xl">contacts@dialogues.asso.fr</p>
          </div>
          <div className="flex lg:justify-center justify-start items-center my-2">
            <Display image={Location} />
            <p className="font-basic text-white ml-4 text-xl"> 9, rue Beaujon 75008 Paris</p>
          </div>
        </div>
      </div>
    </div>
  );
}