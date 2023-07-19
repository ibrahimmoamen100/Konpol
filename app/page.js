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
      <div className="products bg-zinc-100 ">
        <div className="container m-auto p-4 flex flex-wrap gap-4">
          <ProductCard
            imageSrc="v1689682249/tools_1_vh8zdt.jpg"
            title="Tools 1 "
            description="this tools one for konpol company"
          />
          <ProductCard
            imageSrc="v1689682249/tools_3_d88qjv.jpg"
            title="Wood konpol "
            description="this tools one for konpol company"
          />
          <ProductCard
            imageSrc="v1689682247/bibe_kizdaz.png"
            title="Chair"
            description="this Chair for konpol company"
          />
          <ProductCard
            imageSrc="v1689682248/kind_of_wood_ze5q4i.jpg"
            title="Air Condition"
            description="this Air Condition  for konpol company"
          />
          <ProductCard
            imageSrc="v1689682249/tools_3_d88qjv.jpg"
            title="Wood konpol "
            description="this tools one for konpol company"
          />
          <ProductCard
            imageSrc="v1689682247/bibe_kizdaz.png"
            title="Chair"
            description="this Chair for konpol company"
          />
          <ProductCard
            imageSrc="v1689682248/kind_of_wood_ze5q4i.jpg"
            title="Air Condition"
            description="this Air Condition  for konpol company"
          />
          <ProductCard
            imageSrc="v1689682249/tools_3_d88qjv.jpg"
            title="Wood konpol "
            description="this tools one for konpol company"
          />
          <ProductCard
            imageSrc="v1689682247/bibe_kizdaz.png"
            title="Chair"
            description="this Chair for konpol company"
          />
          <ProductCard
            imageSrc="v1689682248/kind_of_wood_ze5q4i.jpg"
            title="Air Condition"
            description="this Air Condition  for konpol company"
          />
        </div>
      </div>
      <Stats />
      {/* <MapLocation/> */}
      <Map />
    </div>
  );
}
