import { CldImage } from "next-cloudinary";
import Image from "next/image";
import React from "react";
function ProductCard({ imageSrc, title, buttonText }) {
  return (
    <div className="shadow-lg rounded-lg bg-white overflow-hidden">
      <CldImage
        width={600}
        height={600}
        src="v1689225354/de4ed588-0f77-4153-b4a4-78c74fa3aab8_owvpo0.jpg"
        crop=""
        alt="this image"
        gravity=""
      />
    </div>
  );
}

export default ProductCard;
