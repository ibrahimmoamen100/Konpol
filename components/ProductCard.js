import { CldImage } from "next-cloudinary";
import Image from "next/image";
import React from "react";
function ProductCard({ imageSrc, title, description }) {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="card w-80 border-2 ">
        <figure>
          <CldImage
            src={imageSrc}
            alt="Shoes"
            crop="pad"
            gravity="center"
            background="white"
            width={320}
            height={220}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
