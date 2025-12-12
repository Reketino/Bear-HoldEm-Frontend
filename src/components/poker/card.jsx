"use client";
import Image from "next/image";
import CardTofFile from "./cardtofile";

export default function Card({ code, hidden = false }) {
    const src = hidden ? "/cards/back.png" : CardTofFile(code); 



  return (
    <main className=" w-20 h-32 relative">
    <Image
    src={src}
    alt={`Card ${code}`}
    fill
    sizes="80px"
    />
    </main>
  );
}
