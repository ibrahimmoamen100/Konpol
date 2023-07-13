"use client";
import { animated, useSpring } from "@react-spring/web";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";


function Navbar() {
  const [isSticky, setIsSticky] = useState(false);



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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <animated.div style={navScroll} className={isSticky ? 'fixed left-0 bg-base-100 m-auto w-full z-10 shadow-md' : ''}>
      <div className=" navbar bg-base-100 container m-auto w-full">
        <div className="flex mr-5">
          <Link href="">
            <CldImage
              width={parseInt(isSticky?"80":'120')}
              height="120"
              border="2px_solid_darkblue"
              src="v1688261356/konpol_transparent_logo_lyk9ay.png"
              sizes="100vw"
              alt="Description of my image"
            />{" "}
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
            className="lg:hidden flex flex-col justify-between h-5 w-6 cursor-pointer items-end"
          >

          </div>
          <div className="hidden lg:flex justify-end items-end gap-4">
            <button className="border-2 text-main border-main p-2 flex justify-center items-center gap-2">
              Our Locations <GiEarthAmerica />
            </button>
            <button className="border-2 border-secondMain text-secondMain p-2 flex justify-center items-center gap-2">
              Contact Us <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Navbar;