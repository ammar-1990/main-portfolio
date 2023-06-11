import { EyeIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

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
    <div className="w-full flex py-20 items-center flex-col flex-shrink-0 snap-center gap-7 relative z-20">
      {openModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
          <div
            className="w-[350px] md:w-[700px] bg-[rgb(36,36,36)]
 rounded-lg md:p-10 p-6 text-justify relative "
          >
            <h1 className="text-white capitalize py-2 text-center">   {name.replace("_", " ").toLowerCase().replace("mern", "MERN")}</h1>
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="absolute top-0 right-0 text-xs rounded-tr-md rounded-bl-md bg-main text-white p-1 sm:p-2"
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
              <Link target="_blank" href={demo}>
                <EyeIcon className="h-9 text-white cursor-pointer p-2 bg-main  rounded-full w-9" />
              </Link>
              <Link target="_blank" href={code}>
                <CodeBracketIcon className="h-9 text-white cursor-pointer p-2 bg-main  rounded-full w-9" />
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className=" aspect-video overflow-hidden">
        <img
          src={img}
          alt="project"
          className={`w-[350px] ${!pull && "object-contain h-full"}  `}
        />
      </div>

      <p>
        {order} of {length}
      </p>
      <h1 className="text-sm text-center capitalize">
        {name.replace("_", " ").toLowerCase().replace("mern", "MERN")}
      </h1>
      <button
        type="button"
        className="heroButton"
        onClick={() => setOpenModal(true)}
      >
        More info
      </button>
    </div>
  );
};

export default Project;
