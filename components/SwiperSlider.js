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
        className="w-full h-[50vh]"
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
            height={1000}
            alt="Description of my image"
            crop="fill"
            src="v1689225374/bg2_csqnjt.jpg"
            gravity="faces"
            overlays={[
              {
                width: 2670 - 800,
                crop: "fit",
                position: {
                  x: 50,
                  y: 50,
                  gravity: "north_west",
                },
                text: {
                  color: "skyblue",
                  fontFamily: "roboto",
                  fontSize: 160,
                  fontWeight: "bold",
                  // textDecoration: 'underline',
                  letterSpacing: 8,
                  text: "KONPOL",
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
                  color: "skyblue",
                  fontFamily: "Source Sans Pro",
                  fontSize: 70,
                  fontWeight: "bold",
                  textDecoration: "underline",
                  letterSpacing: 14,
                  text: "Solution Providers ",
                },
              },
            ]}
            zoom="0.5"
          />
          <button className="text-4xl z-10 text-primary">
            {" "}
            Learn More about us{" "}
          </button>
        </SwiperSlide>
        <SwiperSlide className="bg-orange-800">
          Slide 2{" "}
          <button className="text-4xl z-10 text-primary">
            {" "}
            Learn More about us{" "}
          </button>
        </SwiperSlide>
        <SwiperSlide className="bg-sky-600">Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
