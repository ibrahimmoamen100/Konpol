"use client";
import Card from "@/components/Card";
import Contact from "@/components/Contact";
import CounterPage from "@/components/CounterPage";
import Map from "@/components/Map";
import MapLocation from "@/components/MapLocation";
import ProductCard from "@/components/ProductCard";
// import ProductCard from "@/components/ProductCard";
import Stats from "@/components/Stats";
import SwiperSlider from "@/components/SwiperSlider";
import Script from "next/script";
export default function Home() {
  return (
    <div>
      {/* <CounterPage /> */}
      <SwiperSlider />
      <div className="products bg-zinc-100">
        <ProductCard imageSrc="" title="" description="" />
      </div>
      <Stats />
      {/* <MapLocation/> */}
      <Map />
    </div>
  );
}
