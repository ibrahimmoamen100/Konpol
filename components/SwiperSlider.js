"use client";
import React from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { CldImage } from "next-cloudinary";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SwiperSlider() {
  return (
    <div>
      <Swiper
        className="w-full h-auto"
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        rewind={true}
      >
        <SwiperSlide className="bg-red">
          <CldImage
            width={3000}
            height={1080}
            alt="Description of my image"
            className="absolute"
            crop="thumb"
            src="v1689225374/bg2_csqnjt.jpg"
            gravity="faces"
            overlays={[
              {
                width: 2670 - 800,
                crop: "fit",
                position: {
                  x: 50,
                  y: 100,
                  gravity: "north_west",
                },
                text: {
                  color: "skyblue",
                  fontFamily: "Righteous",
                  fontSize: 100,
                  fontWeight: "bold",
                  // textDecoration: 'underline',
                  letterSpacing: 8,
                  text: "Solution Providers ",
                },
              },
              {
                width: 2670 - 800,
                crop: "fit",
                position: {
                  x: 50,
                  y: 200,
                  gravity: "north_west",
                },
                text: {
                  color: "#ddd",
                  fontFamily: "Orbitron",
                  fontSize: 40,
                  backgroundColor: "white",
                  padding: "5px",
                  fontWeight: "bold",
                  // textDecoration: "underline",
                  letterSpacing: 4,
                  text: "Learn More About Us by Download Our Cataloge ",
                },
              },
            ]}
            zoom="0.5"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-orange-800 relative">
          {" "}
          <CldImage
            width={3000}
            height={1080}
            alt="Description of my image"
            crop="thumb"
            src="v1689225371/82c2bbc2-80b4-4eaa-a075-fe0a15ae778e_p2qgkp.jpg"
            gravity="faces"
            overlays={[
              {
                width: 2670 - 800,
                crop: "fit",
                position: {
                  x: 50,
                  y: 100,
                  gravity: "north_west",
                },
                text: {
                  color: "#00154e",
                  fontFamily: "Righteous",
                  fontSize: 100,
                  fontWeight: "bold",
                  // textDecoration: 'underline',
                  letterSpacing: 8,
                  text: "Solution Providers ",
                },
              },
              {
                width: 2670 - 800,
                crop: "fit",
                position: {
                  x: 50,
                  y: 200,
                  gravity: "north_west",
                },
                text: {
                  color: "#df9b0b",
                  fontFamily: "Orbitron",
                  fontSize: 40,
                  backgroundColor: "white",
                  padding: "5px",
                  fontWeight: "bold",
                  // textDecoration: "underline",
                  letterSpacing: 4,
                  text: "Learn More About Us by Download Our Cataloge ",
                },
              },
            ]}
            zoom="0.5"
          />
          <button className="relative bg-slate-100 font-roboto p-2   bottom-20 left-10 z-10">
            {" "}
            Download Our Cataloge
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
