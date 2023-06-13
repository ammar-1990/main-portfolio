import { useRouter } from "next/router";
import { HomeIcon } from "@heroicons/react/24/outline";
import { IdentificationIcon } from "@heroicons/react/24/outline";
import { QueueListIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
import Link from "next/link";

type Props = { theHash: string };

const Navigator = ({ theHash }: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).classList.contains("navigator")) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setOpen]);

  const tabs = [
    {
      name: "",
      to: "#hero",
      Icon: HomeIcon,
    },
    {
      name: "about",
      to: "#about",
      Icon: IdentificationIcon,
    },
    {
      name: "services",
      to: "#services",
      Icon: QueueListIcon,
    },
    {
      name: "skills",
      to: "#skills",
      Icon: CodeBracketIcon,
    },
    {
      name: "certifications",
      to: "#certifications",
      Icon: TrophyIcon,
    },

    {
      name: "projects",
      to: "#projects",
      Icon: CommandLineIcon,
    },
    {
      name: "contact",
      to: "#contact",
      Icon: EnvelopeIcon,
    },
  ];

  return (
    <div
      className={`navigator cursor-pointer ${
        theHash !== "" && "opacity-100 pointer-events-auto"
      } delay-300 opacity-0 pointer-events-none duration-500 fixed top-5 w-fit flex-col rounded-sm p-1 sm:px-3  ${
        open && "gap-4 rounded-lg "
      }  bg-main/40 text-white mx-auto flex justify-center items-center  left-0 right-0 z-50`}
      onClick={() => setOpen((prev) => !prev)}
    >
    
      <Bars3Icon
        className="navigator h-4 text-white   "
        onClick={(e) => 
       {   e.stopPropagation();
          setOpen((prev) => !prev)}}
      />
      <div
        className={`flex  gap-1 items-center ${
          !open ? "w-0 h-0 " : " w-[195px] h-10"
        } overflow-hidden duration-300`}
      >
        {tabs.map(({ Icon, to, name }, i) => (
          <Link
            onClick={() => setOpen(false)}
            key={i}
            className={`${
              theHash === name && "text-red-600 bg-white rounded-full "
            }block ${open && "p-1"}`}
            href={to}
          >
            {<Icon className=" h-4" />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigator;
