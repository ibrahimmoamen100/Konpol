import React from "react";

// import { Inter } from "@next/font/google";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { BsDownload, BsHouseDoor, BsTools } from "react-icons/bs";
import { FcDownload } from "react-icons/fc";

import Countdown from "./CounterDown";

// import styles from "../styles/page.module.css";
// const inter = Inter({ subsets: ["latin"] });
function CounterPage() {
  return (
    <div className="h-screen bg-slate-300 bg-no-repeat bg-cover bg-current" style={{ backgroundImage: "url('./images/background.jpeg')" }}>
      {" "}
      <div className="container m-auto flex justify-center items-center h-full" >
        <div >
          <h1 className="sm:text-lg bg-white text-main p-5 text-center font-righteous font-bold text-xs stat place-items-center rounded-xl">
            WELCOME TO KONPOL COMPANY
          </h1>
          <h2 className="sm:text-lg bg-white p-5 text-center flex items-center justify-center text-secondMain font-orbitron font-bold text-xs stat place-items-center rounded-xl">
            Website is under Design <BsTools className="text-xl lg:text-3xl" />
          </h2>
          <Countdown />
          <p className="sm:text-lg bg-white text-main p-5 text-center font-righteous text-xs rounded-xl  ">
            Check More About Us by Download our Catalog in the button Down below
          </p>
          <div className="flex sm:flex-auto justify-around items-center gap-1 ">
            <Link
              href="https://drive.google.com/file/d/1JQwy0tlURPNYMH7M5O2WTR1k0rdiUE0X/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              <button className="p-3 bg-secondMain transition duration-200  hover:bg-blue-700 flex flex-1 flex-row justify-center items-center text-white font-righteous rounded-xl">
                DOWNLOAD CATALOGE <BsDownload className="mx-2 text-lg" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterPage;
