"use client";
import Card from "./card";

export default function Hand({ cards = [] }) {
  return (
    <main className='flex gap-2 md:gap-3'>
      {cards.map((card, i) => (
      <Card key={i} code={card} />
      ))}
    </main>
  );
}
