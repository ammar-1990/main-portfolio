import { EyeIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MyModal from "./my-modal";


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
    <div className="w-full flex pt-8 items-center justify-center flex-col flex-shrink-0 snap-center gap-2 relative z-20 snap-always">
    <MyModal
    isOpen={openModal}
    setOpenModal={setOpenModal}
    name={name}
    img={img}
    pull={pull}
    overView={overView}
    techStack={techStack}
    demo={demo}
    code={code}
    length={length}
    order={order}
    />

      <motion.div
        initial={{ y: -150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      viewport={{once:true}}
        className="p-2 bg-[rgb(19,19,19)] rounded-lg group cursor-pointer border border-white"
      >
        <div className=" aspect-video overflow-hidden  ">
          <Image
            src={img}
            alt="project"
            width={400}
            height={200}
            priority={true}
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
