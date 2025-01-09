import ytLogo from "../assets/ytLogo.png";
import { MdMenu, MdKeyboardArrowLeft } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { CiBellOn, CiMicrophoneOn, CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Button from "./Button";
import { useState } from "react";

export default function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`md:flex flex-shrink-0 gap-4 items-center  ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button>
          <MdMenu />
        </Button>
        <a href="/">
          <img src={ytLogo} className="h-6" alt="" />
        </a>
        <Button />
      </div>
      <form
        className={`gap-4 flex-grow justify-center  ${
          showFullWidthSearch ? "flex" : "md:flex hidden"
        }`}
      >
        <Button
          type="button"
          size={"icon"}
          variant={"ghost"}
          className={"md:hidden"}
          onClick={() => setShowFullWidthSearch(false)}
        >
          <MdKeyboardArrowLeft />
        </Button>
        <div className="flex flex-grow max-w-[800px]">
          <input
            type="search"
            placeholder="Search Videos"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 
            text-lg w-full focus:border-blue-500 outline-none"
          ></input>
          <Button
            className={
              "py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0"
            }
          >
            <CiSearch />
          </Button>
        </div>
        <Button type="button" size={"icon"} className={"flex-shrink-0"}>
          <CiMicrophoneOn />
        </Button>
      </form>
      <div
        className={`md:flex flex-shrink-0 gap-1 md:gap-4 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size={"icon"}
          variant={"ghost"}
          className={"md:hidden"}
        >
          <CiSearch />
        </Button>
        <Button size={"icon"} variant={"ghost"} className={"md:hidden"}>
          <CiMicrophoneOn />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <AiOutlineVideoCameraAdd />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <CiBellOn />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <CgProfile />
        </Button>
      </div>
    </div>
  );
}
