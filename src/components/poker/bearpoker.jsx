"use client";
import React, { useState } from 'react'
import Card from './card';

export default function BearPoker() {
    const [state, setState] = useState(null);
    const [loading, setLoading] = useState(false);


    async function startGame() {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/start`, {
        method: "POST",
      });
      const data = await res.json();
      setState(data);
      setLoading(false);
    }


    async function sendAction(action, amount = 0) {
      if (!state) return;
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/action?player_id=0&action=${action}&amount=${amount}`,
        { method: "POST" }
      );

      const data = await res.json();
      setState(data);
      setLoading(false);
    }


  return (
    <main className='poker-container'>
      <header className='poker-header'>
         <h1 className='poker-title'>Bear HoldEm VIP</h1>        
      </header>


      <section className='poker-button'>
        <button onClick={startGame} disabled={loading} className=''>
            {loading ? "Starter..." : "Start Game"}
        </button>
      </section>
    
    {state && (
        <article className='poker-box'>
            <section>
                <h2>Dine kort</h2>
                <div className='flex gap-2'>
                  {state.players[0].hand.map((c, i) => (
                    <Card key={i} code={c} />
                  ))}
                  </div>
            </section>


            <section>
                <h2>AI Hand</h2>
                <div className='flex gap-2'>
                  {state.street === "showdown" 
                    ? state.players[1].hand.map((c, i) => <Card key={i} code={c} />)
                    : [0, 1].map((i) => <Card key={i} hidden />)}
                  </div>
            </section>


            <section>
                <h2>Board</h2>
                <div className='flex gap-2'>
                  {state.board.map((c, i) => (
                    <Card key={i} code={c} />
                  ))}
                  </div>
            </section>


            <section>
                <h2>Street</h2>
                <p>{state.street}</p>
            </section>

            <section>
              <h2>Pot</h2>
              <p>{state.pot}</p>
            </section>

          {state.street !== "showdown" && ( 
            <section className='actions flex gap-2 mt-4'>
              <button onClick={() => sendAction("check")}>Check</button>
              <button onClick={() => sendAction("call")}>Call</button>
              <button onClick={() => sendAction("raise", 40)}>Raise</button>
              <button onClick={() => sendAction("fold")}>Fold</button>
            </section>
          )}


          {state.street === "showdown" && (
            <footer className='winner-box mt-6'>
                <h2>Winner</h2>
                <p>{state.showdown?.winner_name}</p>
                <p>{state.showdown?.winner_hand}</p>
                <p>Pot: {state.showdown?.pot ?? state.pot}</p>
            </footer>
            )}
        </article>
    )}    
    </main>
  );
}
