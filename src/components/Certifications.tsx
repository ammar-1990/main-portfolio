import { TrophyIcon } from "@heroicons/react/24/solid";
import { certificates } from "@/data";
import Certificate from "./Certificate";

type Props = {};

const Certifications = (props: Props) => {
  return (
    <section id="certifications" className="section flex flex-col pb-5 relative px-4">
        <div className="absolute inset-0  flex items-center justify-center z-[0]">
          <TrophyIcon className="text-main h-[600px] opacity-10 flexs" />
        </div>
      
      <h1 className="title">certifications</h1>
      <p className="text-center text-secondary text-xs mt-5 uppercase spac">
        Every day is a learning day
      </p>
      <div className=" flex-1  mt-8 relative flex snap-x snap-mandatory w-full overflow-x-scroll px-4 gap-7 myScrollTwo">
{certificates.map(el=><Certificate key={el.id} name={el.name} image={el.img} icon={el.icon} link={el.link} />)}



      
      </div>
    </section>
  );
};

export default Certifications;
