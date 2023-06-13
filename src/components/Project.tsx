import { EyeIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


type Props = {
  name: string;
  img: string;
  pull: boolean;
  overView: string;
  techStack: string[];
  demo: string;
  code: string;
  length: number;
  order: number;
};

const Project = ({
  name,
  img,
  pull,
  overView,
  techStack,
  demo,
  code,
  length,
  order,
}: Props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full flex pt-8 items-center justify-center flex-col flex-shrink-0 snap-center gap-2 relative z-20">
      {openModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[100]">
          <div
            className="w-[350px] md:w-[700px] bg-[rgb(36,36,36)]
 rounded-lg md:p-10 p-6 text-justify relative z-[100]"
          >
            <h1 className="text-white capitalize py-2 text-center">
              {" "}
              {name.replace("_", " ").toLowerCase().replace("mern", "MERN")}
            </h1>
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="absolute top-0 right-0 text-xs rounded-tr-md rounded-bl-md bg-main text-white p-1 sm:p-2 duration-300 hover:bg-red-800"
            >
              X
            </button>
            <p className="text-white text-xs max-h-[300px] px-2 overflow-y-scroll myScrollThree">
              {overView}
            </p>
            <h1 className="text-white mt-3">TechStack</h1>
            <ul className="text-white text-xs mt-1 list-disc pl-4">
              {techStack.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
            <div className="flex items-center gap-5 mt-5">
              <Link
                target="_blank"
                href={demo}
                className="px-3 bg-main text-white flex items-center gap-1 py-1 rounded-md text-xs active:scale-95 duration-300 hover:bg-red-800"
               
              >
                <EyeIcon className="h-5 text-white cursor-pointer   " />
                Demo
              </Link>
              <Link
                target="_blank"
                href={code}
                className="px-3 bg-main text-white flex items-center gap-1 py-1 rounded-md text-xs active:scale-95 duration-300 hover:bg-red-800"
               
              >
                <CodeBracketIcon className="h-5 text-white cursor-pointer   " />
                Code
              </Link>
            </div>
          </div>
        </div>
      )}

      <motion.div
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="p-2 bg-[rgb(19,19,19)] rounded-lg group cursor-pointer border border-white"
      >
        <div className=" aspect-video overflow-hidden ">
          <Image
            src={img}
            alt="project"
            width={400}
            height={200}
            priority
            className={`w-[500px] ${!pull && "object-contain h-full"} ${
              pull &&
              " group-hover:translate-y-[-70%] group-hover:duration-[4s] "
            } duration-[1s] ease-linear   `}
          />
        </div>
      </motion.div>

      <p>
        {order} of {length}
      </p>
      <h1 className="text-sm text-center capitalize">
        {name.replace("_", " ").toLowerCase().replace("mern", "MERN")}
      </h1>

      <button
        type="button"
        className=" border-main px-6 py-1 uppercase tracking-widest text-xs text-white bg-main  border rounded-full duration-300 hover:bg-red-800 active:scale-95 "
        onClick={() => setOpenModal(true)}
      >
        More info
      </button>
    </div>
  );
};

export default Project;
