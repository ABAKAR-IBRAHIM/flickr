"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Gallery() {
  const [images, SetImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/flickr")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (images.length === 0)
    return (
      <h2 className=" mx-auto max-w-screen-xl h-screen text-center pt-5 text-2xl font-bold">
        No Images Found
      </h2>
    );
  return (
    <section className="px-2 py-3  grid gap-2 grid-cols-gallery mx-auto max-w-screen-xl ">
      {images.map((image, index) => (
        <div
          key={index}
          className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group"
        >
          <Image
            src={image}
            alt=""
            fill={true}
            sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
            className="object-cover group-hover:opacity-75"
          />
        </div>
      ))}
    </section>
  );
}
