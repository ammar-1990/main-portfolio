import Lottie from "lottie-react";

type Props = {
  title: String;
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

const ServiceCard = ({ title, services, lottie, images }: Props) => {
  return (
    <div className="w-full flex-shrink-0 snap-start">
      <div className="w-52 h-52 flex items-center justify-center  ">
        <Lottie animationData={lottie} />
      </div>
      <h1>{title}</h1>
      <div className="flex items-center gap-4 my-6 px-2">
          {images?.map((el, i) => (
            <div
              className="w-12 h-12 rounded-full p-3 hover:scale-110 duration-300 cursor-pointer  bg-white flex items-center justify-center"
              key={i}
            >
              <img src={el} className="w-full" />
            </div>
          ))}
        </div>
      <div>
        {services.map((el, i) => (
          <p className="" key={i}>
            {el}
          </p>
        ))}
       
      </div>
    </div>
  );
};

export default ServiceCard;
