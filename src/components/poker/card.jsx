"use client";
import Image from "next/image";
import CardTofFile from "./cardtofile";

export default function Card({ code, hidden = false }) {
    const src = hidden ? "/cards/back.png" : CardTofFile(code); 



  return (
    <main className="relative w-16 h-24 md:w-20 md:h-32 card-animate">
    <Image
    src={src}
    alt={`Card ${code}`}
    fill
    sizes="80px"
    />
    </main>
  );
}
