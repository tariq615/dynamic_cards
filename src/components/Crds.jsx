import { motion } from "framer-motion";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdDownload } from "react-icons/md";

function Crds({ data ,reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1}} dragElastic={.3} dragTransition={{bounceStiffness: 700, bounceDamping: 10}} className="relative px-7 pt-10 w-[290px] h-[375px] rounded-[45px] bg-zinc-900 text-white overflow-hidden">
      <FaRegFileAlt />
      <div className="ml-10 mt-4 w-36 h-36 flex items-center justify-center">
      <img className="w-36 h-36 rounded-full object-cover object-top bg-red-500" src={data.url} alt="" />
      </div>
      <p className="mt-7">{data.desc}</p>
      <div className=" w-full footer absolute bottom-0 left-0 ">
        <div className="flex items-center justify-between mb-6 px-7">
          <h1>{data.size}</h1>
          <span className="bg-zinc-600 rounded-full w-6 h-6 flex items-center justify-center">
            {data.close ? (
              <IoClose size="1.2em" color="#fff" />
            ) : (
              <MdDownload size="1.2em" color="#fff" />
            )}
          </span>
        </div>
        {
          data.tag.isopen && (
            <div
            className={`w-full flex items-center justify-center py-3 ${data.tag.color === "blue" ? 'bg-green-600' : 'bg-blue-600'}`}
          >
            <h3 className="font-semibold">{ data.tag.title}</h3>
          </div>
          )
        }
        
      </div>
    </motion.div>
  );
}

export default Crds;
