"use client";
import Image from "next/image";

export default function Card({ code, hidden = false }) {
    let src;


    if (hidden || code === "back") {
        src = "cards/back.png";
    } else {
        src = `/cards/${code}.svg`;
    }


  return (
    <main className="card w-20 h-[120px] relative">
    <Image
    src={src}
    alt={code}
    fill
    sizes="80px"
    className="rounded-md shadow-lg object-cover"
    />
    </main>
  );
}
