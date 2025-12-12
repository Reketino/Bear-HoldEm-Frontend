"use client";
import Image from "next/image";
import CardTofFile from "./cardtofile";

export default function Card({ code, hidden }) {
    let src;

    if (hidden || code === "back") {
      src = "/cards/back.png";
    } else {
      src = CardTofFile(code);
    }


  return (
    <main className="relative w-16 h-24 md:w-20 md:h-32 card-animate">
    <Image
    src={src}
    alt={`Card ${code}`}
    fill
    sizes="100px"
    className="rounded-lg shadow-lg"
    />
    </main>
  );
}
