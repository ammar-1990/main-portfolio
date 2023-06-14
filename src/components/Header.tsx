import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineDocument } from "react-icons/hi";

type Props = {};

function Header({}: Props) {
  return (
    <header className="fixed top-0 flex items-start justify-between max-w-6xl left-1/2 -translate-x-[50%] z-20 p-5 py-10 w-full">
      <motion.nav
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center gap-4 flex-col sm:flex-row"
      >
        <Link href={"https://github.com/ammar-1990"}>
          <BsGithub size={20} color="gray" />
        </Link>

        <Link href={"https://www.linkedin.com/in/ammar-haidar-569344223"}>
          <FaLinkedinIn size={20} color="gray" />
        </Link>
        <Link href={"/CV.pdf"} download={true} className="relative group">
          <HiOutlineDocument size={20} color="gray" />
          <span className="text-gray absolute group-hover:-top-4 top-0 left-1 group-hover:opacity-100 duration-300 text-xs  opacity-0">
            cv
          </span>
        </Link>
      </motion.nav>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className=""
      >
        <Link href={"#contact"} className="flex items-center gap-2">
          <FaEnvelope size={20} color="gray" />
          <p className="uppercase text-secondary hidden sm:block text-sm">
            Get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
