import Lottie from "lottie-react";
import {motion} from 'framer-motion'
type Props = {
  title: String;
  small:boolean;
  services: String[];
  lottie:
    | {
        v: string;
        fr: number;
        ip: number;
        op: number;
        w: number;
        h: number;
        nm: string;
        ddd: number;
        assets: (
          | {
              id: string;
              layers: (
                | {
                    ddd: number;
                    ind: number;
                    ty: number;
                    nm: string;
                    sr: number;
                    ks: {
                      o: {
                        a: number;
                        k: number;
                        ix: number;
                      };
                      r: {};
                      p: {};
                      a: {};
                      s: {};
                    };

                    bm: number;
                  }
                | {}
              )[];
            }
          | {}
        )[];
        layers: ({} | {})[];
        markers: never[];
      }
    | undefined;
  images: string[] | [];
};

const ServiceCard = ({ title, services, lottie, images ,small }: Props) => {
  return (
    <article className="w-[350px] md:w-[600px] xl:w-[900px] flex-shrink-0 snap-center py-5 px-10 bg-[#272727]  opacity-40 hover:opacity-95 rounded-lg cursor-pointer duration-300 overflow-hidden ">
      <motion.div
      initial={{y:-200,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:1.2}}
       className={` w-52 h-52  flex items-center justify-center text-center mx-auto relative` }>
        <div className="w-36 h-36 rounded-full bg-white absolute" />
        <Lottie animationData={lottie}  className={`${small ? "w-32 h-32" : "w-52 h-52"}`} />
      </motion.div>
      <h1 className="text-2xl uppercase text-center">{title}</h1>
     {images.length!==0 ? <div className="flex items-center gap-4 my-2 md:my-6 px-2 justify-center">
          {images?.map((el, i) => (
            <div
              className={`
             md:w-12 md:h-12 w-9 h-9 rounded-full p-3 hover:scale-110 duration-300 cursor-pointer  bg-white flex items-center justify-center`}
              key={i}
            >
              <img src={el} className="w-full" alt="skill" />
            </div>
          ))}
        </div>:<div className="md:h-12 h-9 p-3  my-2 md:my-6 "/>}
      <ul className="list-disc mx-auto w-fit h-[150px] overflow-y-scroll px-6 myScrollThree">
        {services.map((el, i) => (
          <li className=" py-2 text-xs" key={i}>
            {el}
          </li>
        ))}
       
      </ul>
    </article>
  );
};

export default ServiceCard;
