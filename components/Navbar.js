"use client";
import { animated, useSpring } from "@react-spring/web";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";

import SmallDrop from "./SmallDrop";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { line1, line2, line3 } = useSpring({
    line1: isOpen
      ? "rotate(45deg) translate(2px, 2px)"
      : "rotate(0deg) translate(0px, 0px)",
    line2: isOpen ? 0 : 1,
    line3: isOpen
      ? "rotate(-45deg) translate(9px, -11px)"
      : "rotate(0deg) translate(0px, 0px)",

    config: { duration: 200 },
  });

  const navScroll = useSpring({
    top: isSticky ? 0 : -30,
    config: { duration: 200 },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 230) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <animated.div
      style={navScroll}
      className={
        isSticky ? "fixed left-0 bg-base-100 m-auto w-full z-10 shadow-md" : ""
      }
    >
      <div className=" navbar bg-base-100 container m-auto w-full">
        <div className="flex mr-5">
          <Link href="/">
            <CldImage
              width={isSticky ? 80 : 120}
              height="80"
              src="v1689225354/logo_rz0olg.jpg"
              sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
              alt="Description of my image"
            />
          </Link>
        </div>
        {/* This Humberger Menu  */}
        <div className="flex flex-row justify-end w-full gap-20">
          <div className="hidden sm:flex self-center">
            <span className="font-bold  text-gray-500 text-lg">
              Solution Provider
            </span>
          </div>
          <div
            onClick={handleClick}
            className="lg:hidden flex flex-col justify-between h-5 w-6 cursor-pointer items-end"
          >
            <animated.div
              style={{ transform: line1 }}
              className="line bg-gray-600 w-full h-[2px]"
            />
            <animated.div
              style={{ opacity: line2 }}
              className="line bg-gray-600 w-full h-[2px]"
            />
            <animated.div
              style={{ transform: line3 }}
              className="line bg-gray-600 w-full h-[2px]"
            />
          </div>
          <div className="hidden lg:flex justify-end items-end gap-4">
            <Link
              href="location"
              className="border-2 text-main border-main p-2 flex justify-center items-center gap-2"
            >
              Our Locations <GiEarthAmerica />
            </Link>
            <Link
              href="contact"
              className="border-2 border-secondMain text-secondMain p-2 flex justify-center items-center gap-2"
            >
              Our Cataloge <BsArrowRight />
            </Link>
            <Link
              href="contact"
              className="border-2 border-secondMain text-secondMain p-2 flex justify-center items-center gap-2"
            >
              Contact Us <BsArrowRight />
            </Link>
          </div>
        </div>
      </div>
      {isOpen && <SmallDrop />}
    </animated.div>
  );
}

export default Navbar;
