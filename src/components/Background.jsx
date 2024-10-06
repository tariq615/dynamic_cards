import React from "react";
import Foreground from "./Foreground";

function Background() {
  return (
    <div className="fixed z-[2] w-full  h-screen ">
      <div className="fixed w-full text-xl font-semibold text-zinc-500 flex items-center justify-center py-12">
        <h1>Documents</h1>
      </div>
      <h1 className="text-[10vw] font-semibold absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] tracking-tighter">
        DOCS.
      </h1>
      <Foreground />
    </div>
  );
}

export default Background;
