import { CldImage } from "next-cloudinary";
import Image from "next/image";
import React from "react";
function ProductCard({ imageSrc, title, buttonText }) {
  return (
    <div className="shadow-lg rounded-lg bg-white overflow-hidden">
      <CldImage width={600} height={600} src="" crop="" gravity="" />
    </div>
  );
}

export default ProductCard;
