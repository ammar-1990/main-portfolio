import { Dialog, Transition } from "@headlessui/react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment } from "react";

type Props = {
  isOpen: boolean;
  setOpenModal: (value: boolean) => void;
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

const MyModal = ({
  isOpen,
  setOpenModal,
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
  return (
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={()=>setOpenModal(false)}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="">
            <div
                  className="w-[350px] md:w-[700px] bg-[rgb(36,36,36)]
 rounded-lg md:p-10 p-6 text-justify relative z-[100]"
                >
                  <h1 className="text-white capitalize py-2 text-center">
                    {" "}
                    {name
                      .replace("_", " ")
                      .toLowerCase()
                      .replace("mern", "MERN")}
                  </h1>
                  <button
                    type="button"
                    onClick={() => setOpenModal(false)}
                    className="absolute top-1 right-1 text-xs rounded-md  bg-main text-white p-1 sm:p-2 duration-300 hover:bg-red-800 flex items-center justify-center flex-shrink-0 w-6 h-6"
                  >
                    X
                  </button>
                  <p className="text-gray-300 text-xs max-h-[300px] px-2 overflow-y-scroll myScrollThree whitespace-pre-line">
                    {overView}
                  </p>
                  <h1 className="text-gray-300 mt-3">TechStack</h1>
                  <ul className="text-gray-300 text-xs mt-1 list-disc pl-4">
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

             
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  );
};

export default MyModal;
