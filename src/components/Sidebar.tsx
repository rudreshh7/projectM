import React from "react";
import { LogoImg, ToggleIcon } from "../utils/index.js";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="max-w-[15%] p-5 ">
      <div className="flex justify-between">
        <Image
          className="w-5"
          src={LogoImg}
          width={100}
          height={100}
          alt="logo"
        />
        <p className="font-bold">ProjectD.</p>
        <Image
          className="w-5"
          src={ToggleIcon}
          width={100}
          height={100}
          alt="logo"
        />
      </div>
      <nav></nav>
      <div>Project</div>
    </div>
  );
};

export default Sidebar;
