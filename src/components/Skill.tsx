type Props = { img: string; level: string; name: string };
import Image from "next/image";

const Skill = ({ img, level, name }: Props) => {
  return (
    <div className="flex items-center justify-center border cursor-pointer duration-300   relative p-1 border-secondary justify-self-center bg-white w-14 h-14 rounded-full sm:w-16 sm:h-16 group">
      <div className="absolute w-full h-full bg-white/80  rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300 ">
        
        <p className="text-black font-bold relative z-10">{level}</p>
      </div>
      <div className="absolute top-0 group-hover:-top-[12px] z-30 opacity-0 duration-300 group-hover:opacity-100 border-[rgb(36,36,36)]  pointer-events-none sm:group-hover:delay-300 text-xs   px-3  bg-white rounded-md border">
        <p className="uppercase text-[rgb(36,36,36)]  text-center font-bold">
          {name}
        </p>
      </div>
      <Image src={img} alt="skill" className="w-auto object-contain"  width={25} height={25} priority/>
    </div>
  );
};

export default Skill;
