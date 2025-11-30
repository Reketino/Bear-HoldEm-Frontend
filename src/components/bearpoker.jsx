"use client";
import React, { useState } from 'react'

export default function BearPoker() {
    const [hand, setHand] = useState(null);
    const [loading, setLoading] = useState(false);


    async function deal() {
      setLoading(true);
      const res = await fetch("http://localhost:8000/deal")
      const data = await res.json();
      setHand (data);
      setLoading(false);
        
    }
  return (
    <main className='poker-container'>
      <header className='poker-header'>
         <h1 className='poker-title'>Bear HoldEm VIP</h1>        
      </header>


      <section className='poker-button-section'>
        <button onClick={deal} disabled={loading} className=''>
            {loading ? "Dealer..." : "Deal Hand"}
        </button>
      </section>
    
    {hand && (
        <article className='poker-box'>
            <section>
                <h2>Dine kort</h2>
                <p>{hand.player.join(" ")}</p>
            </section>


            <section>
                <h2>AI kort</h2>
                <p>{hand.ai.join(" ")}</p>
            </section>


            <section>
                <h2>Board</h2>
                <p>{hand.board.join(" ")}</p>
            </section>


            <section>
                <h2> AI move</h2>
                <p className='ai-action'>{hand.ai_action}</p>
            </section>


            <footer className='winner-box'>
                <h2>Vinner</h2>
                <p className={`winner ${hand.winner}`}>{hand.winner}</p>
            </footer>
        </article>
    )}    
    </main>
  );
}
